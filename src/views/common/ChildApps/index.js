import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import {Link} from "react-router-dom";
import {compose} from "recompose";
import {ItemGrid,ContainerGrid} from "components";
import styles from "./css"

function ChildApps(props) {
  const { classes,apps} = props;
  return (
          <ContainerGrid justify="center">
            {apps.map((app,key) => (
              <ItemGrid key={key} align="center">
                <Link to={`${app.path}`} className={classes.link}>
                  <Button variant="fab" mini aria-label={app.displayName} className={classes.button} style={app.style}>
                      {app.code}
                  </Button>
                  <br/>
                  {app.displayName}
                </Link>
              </ItemGrid>
            ))}
          </ContainerGrid>

  );
}

ChildApps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(ChildApps);


// <div className={classes.root}>
//   <GridList className={classes.gridList} cols={6} cellHeight={56}>
//       {
//         apps.map((app,key)=>{
//           return (
//             <GridListTile key={key}>
//               <Button variant="fab" mini color="secondary" aria-label="blood" className={classes.button}>
//                 B
//               </Button>
//               {/*<RoundButton ariaLabel={app.displayName} hasIcon={false} onClick={onAppClick} id={app.code}>
//                   <span className={classes.text}>{app.code}</span>
//               </RoundButton>*/}
//             </GridListTile>
//           )
//         })
//       }
//   </GridList>
// </div>
