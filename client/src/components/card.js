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
    maxWidth: 200,
    maxHeight:300,
    minHeight:325,
    position: "relative",
    textAlign: 'center'
  },
  media: {
    height: 150,
  },
});

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
        <Typography gutterBottom variant="h6" component="h4">
            {app_name}
          </Typography>
          <Typography style = {{position:"absolute", bottom:0, left:10}}svariant="body2" color="textSecondary" component="p">
          {price}
          </Typography>
        <AddButton  appData = {appdata} addToCart = {addToCart}/>
        <Rating  avg_rating ={avg_rating} />
    </Card>
  );
}
