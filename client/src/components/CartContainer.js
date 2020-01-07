import React, {useContext, useEffect, useState} from 'react'
import { StoreContext } from '../store/store'
import { Container, Grid } from '@material-ui/core';
import CartCard from "./CartCard"
import { fontFamily } from '@material-ui/system';


function CartContainer() {
    let {cart} = (useContext(StoreContext)) 
    const [cartTotal, setCartTotal] = useState(0);
   
     

   const titleStyle = {
    textAlign:'Center',
    fontFamily:'Open sans'
   }
    const containerStyle = {
    padding: "20px",
    display: "Grid",
    gridTemplateColumns: 'Auto',
    gridColumnGap: "10px",
    gridRowGap: "10px",
    justifyItems: 'center'

    };

    const seperationStyle = {
      height : '5px',
      width: '100%',
      backgroundColor: '#3F51B5'
    }

    const infoStyle={
      textAlign:'center',
      fontFamily:'Open sans'

    }

    useEffect(() => {
    console.log('this is cart', cart)
    let cartPrices = 0;
    cart.forEach((app) => {
      console.log(app)
      if(app.price !== 'Free' ){
      let price = app.price.substr(1);
      cartPrices += parseFloat(price)
      }
      console.log("cart prices", cartPrices)
      setCartTotal(cartPrices)
    })
      
    }, [cart]);


    useEffect (() => {
      
    },[cart]);
    
  

    return (

        <div>
        <h1 style = {titleStyle}>Cart</h1>
      <div style = {containerStyle}>
        {cart && cart.map((app, index) => <CartCard key = {index} cartApp = {app}/>)}
        </div>
        <div>
          <div style = {seperationStyle}></div>
    <div style={infoStyle}><span>Subtotal: </span><span>{cartTotal}</span></div>
        </div>
        </div>
    )
}

export default CartContainer

