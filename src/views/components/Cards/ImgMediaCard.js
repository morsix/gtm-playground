import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();
  const { vehicleId, name, imgLink, description, isShortlisted, onShortlist } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imgLink}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {isShortlisted ?
        <IconButton id="removeFromShortlist" onClick={() => onShortlist(vehicleId)} aria-label="remove from shortlist">
           <FavoriteIcon className="remove-from-shortlist" />
        </IconButton>
        :
        <IconButton id="addToShortlist" onClick={() => onShortlist(vehicleId)} aria-label="add to shortlist">
          <FavoriteBorderIcon className="add-to-shortlist" /> 
        </IconButton>
     }
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
