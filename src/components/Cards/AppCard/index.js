import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from "./css";

function AppCard(props) {
  const { classes,title,secondaryText,route,image,history} = props;
  const changeRoute=(route)=>{
    history.push(route);
  }
  return (
    <div>
      <Card onClick={()=>{changeRoute(route)}} className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{title}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {secondaryText}
            </Typography>
          </CardContent>
        </div>
        {image && <CardMedia
          className={classes.cover}
          image={image}
          title={title}
        />}
      </Card>
    </div>
  );
}

AppCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired
};

export default compose(withStyles(styles, { withTheme: true }),withRouter)(AppCard);
