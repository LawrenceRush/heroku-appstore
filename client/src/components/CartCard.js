import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { height } from '@material-ui/system';
import DeleteButton from "./DeleteButton"
const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    display: 'flex',
    justifyContent:"space-between",
    width: "350px"
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '1 0 auto',
    width: '200px'
  },
  cover: {
    width:'300px',
    height:'150x'
  }
 
 
}));



export default function MediaControlCard({cartApp}) {
  const classes = useStyles();
  const theme = useTheme();
    const {app_name, icon_url, price} = cartApp
  return (
    <Card className={classes.card}>
     
      <CardMedia
        className={classes.cover}
        image={icon_url}
        title={app_name}
        
      />
       <div className={classes.details}>
        <CardContent className={classes.content}>
        
          <Typography component="h5" variant="h5">
            {app_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {price}
          </Typography>
        </CardContent>
      </div>

      <DeleteButton appData = {cartApp}/>
    </Card>
  );
}