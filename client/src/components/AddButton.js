import React, {useContext} from 'react'
import { StoreContext } from '../store/store'


export default function MakeButton({appData}) {
  //Had to do some weird stuff to grab reducer from the store here
  let {addToCart} = (useContext(StoreContext))
  
  const buttonStyle = { 
    display: "block",
    width: "10vh",
    height: "1vh",
    background:" #4E9CAF",
    padding:"10px",
    textAlign: "center",
    borderRadius:" 5px",
    color:" blue",
    fontWeight: "bold",
    bottom:30,
    left:35,
    fontSize: " 1.5vh"
};

  return (
    
   
    <a style={buttonStyle} onClick={(e) => {addToCart(appData)}} >Add to cart</a>
    
  );
}