import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating({avg_rating}) {
   
  return (
    <div >
      <Box component="fieldset"   mb={3} borderColor="transparent">
        <Rating name="read-only"  style = {{fontSize: "2.5vh"}} value={avg_rating} precision={0.1}  readOnly />
      </Box>
      </div>
      );
      }