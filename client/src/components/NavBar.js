import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { StoreContext } from '../store/store'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "fixed", /* Set the navbar to fixed position */
    width: "100%",
    top: "0", /* Position the navbar at the top of the page */
    zIndex:"1"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(2),
  },
  a:{
    textDecoration: 'none !important',
    color:'white'
  }

}));

export default function ButtonAppBar() {
    let {cart} = (useContext(StoreContext))
    
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h3" className={classes.title}>
            <a className={classes.a}href = "/">Appstore</a>
          </Typography>
          <Button  href="/Cart" color="inherit">
        <Badge className={classes.margin} badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}