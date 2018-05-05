import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuListItems } from './tileData';
import styles from "./css";

class Header extends React.Component {
  render() {
    const { classes, theme, onHandleDrawerToggle,mobileOpen,onMenuItemClick,history } = this.props;
    console.log(history);
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List><MenuListItems handleMenuItemClick={onMenuItemClick}/></List>
      </div>
    );

    const toCapitilize=(string)=>{
      return string.replace(/\b\w/g, l => l.toUpperCase())
    }

    let pathName=history.location.pathname;
    let pathNameWithSplit=pathName.split("/");
    let appHeader=pathNameWithSplit[1]==="dashboard"?"MIHY":(pathNameWithSplit[pathNameWithSplit.length-1].search("-")>-1?`${toCapitilize(pathNameWithSplit[pathNameWithSplit.length-1].split("-")[0])} ${toCapitilize(pathNameWithSplit[pathNameWithSplit.length-1].split("-")[1])}`:toCapitilize(pathNameWithSplit[pathNameWithSplit.length-1]));

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onHandleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {appHeader}
            </Typography>
            {appHeader!=="MIHY" && <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=>{history.goBack()}}
            >
              <i style={{position:"fixed",right:"16px"}} className="material-icons">keyboard_backspace</i>
            </IconButton>}
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={onHandleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
