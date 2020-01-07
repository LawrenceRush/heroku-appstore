import React, {useContext} from 'react'
import { StoreContext } from '../store/store'
import Card from './card'
import { Container, Grid } from '@material-ui/core';


function AppListContainer(props) {
    let {appData} = (useContext(StoreContext))
    let {addToCart} = (useContext(StoreContext))
    
    
    

  
    const containerStyle = {
    marginTop: "75px",
    padding: "20px",
    display: "Grid",
    gridTemplateColumns: "Auto Auto Auto Auto Auto",
    gridColumnGap: "10px",
    gridRowGap: "10px"
    
    };

    return (
      <div style = {containerStyle}>
        {appData && appData.map((app, index) => <Card key = {index} appdata = {app} addToCart={addToCart}/>)}
        </div>
    )
}

export default AppListContainer

