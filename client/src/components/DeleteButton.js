import React, {useContext} from 'react'
import { StoreContext } from '../store/store'
import ClearIcon from '@material-ui/icons/Clear';


export default function DeleteButton({appData}) {
  //Had to do some weird stuff to grab reducer from the store here
  let {delFromCart} = (useContext(StoreContext))
  
  const buttonStyle = {
    position:"absolute",
    display: "block",
    background:" #4E9CAF",
    textAlign: "center",
    borderRadius:" 5px",
    color:" blue",
    paddingTop: "5px",
    fontWeight: "bold",
    top: 0,
    right: 0
};

  return (
    
   
    <a style={buttonStyle} onClick={(e) => {delFromCart(appData)}} ><ClearIcon/> </a>
    
  );
}