import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from "./RatingStars";
import AddButton from "./AddButton"
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
   height: "35vh",
   width: "25vh"
  },
  media: {
    height: "15vh",
    width:"100%",
    objectFit:"cover"
  },
});

const titleStyle = {
  fontSize:"2vh",
  textAlign:"center",
  gridColumnStart:1,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 2,
}

const priceStyle = {
  fontSize: "1.8vh",
  gridColumnStart:1,
  gridColumnEnd: 2,
  gridRowStart: 3,
  gridRowEnd: 4,
  alignSelf: "end",
  paddingLeft: "1vh"
}

const cardBodyConSty = {
  display: "grid",
  gridTemplateColumns: "8vh 17vh",
  gridTemplateRows: "5vh 10vh 5vh"
}

const AddButtonSty = {
  gridColumnStart:1,
  gridColumnEnd: 3,
  gridRowStart: 2,
  gridRowEnd: 3,
  alignSelf:"center",
  placeSelf: "center",
  paddingTop: "3vh"
}

const ratingSty = {
  gridColumnStart:2,
  gridColumnEnd: 3,
  gridRowStart: 3,
  gridRowEnd: 4,
}
export default function MediaCard(props) {

const {appdata} = props 
const {addToCart}  = props
let {app_name, avg_rating, icon_url, price, rank} = appdata
avg_rating = parseInt(avg_rating)

const classes = useStyles();
  return (  
    <Card className={classes.card}>
      <CardMedia
    

          className={classes.media}
          image={icon_url}
          title="Contemplative Reptile"
        />
        <div style = {cardBodyConSty}>
        <Typography style = {titleStyle} >
            {app_name}
          </Typography>
          <Typography style = {priceStyle}>
          {price}
          </Typography>
        <div style = {AddButtonSty} ><AddButton appData = {appdata} addToCart = {addToCart}/></div>
        <div style = {ratingSty}><Rating avg_rating ={avg_rating} /></div>
        </div>
    </Card>
  );
}
