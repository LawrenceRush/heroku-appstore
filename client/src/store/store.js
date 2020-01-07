import React, { createContext, useReducer, useState, useEffect } from 'react';
export const StoreContext = createContext([])
//Importing Json Data
let { table: myData } = require('../data/myjsonfile.json');
//This will be the parsed data
let parsedData = []


//Code for the main store
//Set up appDatatae
function Store({ children }) {
  const [appData, setAppData] = useState([])
  const [initialCart, setinitialCart] = useState([])
  const [cart, setCart] = useState([])

  
  useEffect(() => {
    if (appData !== parsedData) {
      for (let i = 0; i < 99; i++) {
        parsedData.push(JSON.parse(myData[i]))
      }

      let noDuplicates = findDuplicates(parsedData)
      setAppData(noDuplicates)
    }
  }, [])

  useEffect( () => {
      fetch("/api/cart")
        .then(res => res.json())
        .then(
          (result) => {

            setinitialCart(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error)
          }
        )
  }, [])

  useEffect(()=>{
    setCart(initialCart)
  },[initialCart])

  const addToCart = (obj) => {
    console.log(obj)
    setCart([...cart, obj])
    
    fetch('/api/add ', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(res => res.json())
  }

  const delFromCart = (obj) => {
    
    let filteredCart = cart.filter(app => app.app_name != obj.app_name);
    
    setCart(filteredCart);
    
    fetch('/api/delete ', {
      method: 'DELETE',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(res => res.json())
  }

  //Find duplicates in array of objects
   const findDuplicates = (arr) => {
    arr.sort((a,b) => (a.app_name > b.app_name) ? 1 : ((b.app_name > a.app_name) ? -1 : 0)); 

        let results = [];
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i + 1].app_name != arr[i].app_name) {
            results.push(arr[i]);
          }
        }
        return results;
      }

  return (
    <StoreContext.Provider value={{ appData, cart, addToCart, delFromCart }}>
      {[children]}
    </StoreContext.Provider>
  )
}

export default Store
