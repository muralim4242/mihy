import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose } from "recompose";
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import pink from 'material-ui/colors/pink';
import green from 'material-ui/colors/green';
import Icon from 'material-ui/Icon';
import styles from "./css"


function ImageAvatars(props) {
  const { classes } = props;
  return (
      <Avatar
        className={classNames(classes.pinkAvatar)}
      >
        <Icon>invert_colors</Icon>
      </Avatar>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles,styles(pink,green))(ImageAvatars);
