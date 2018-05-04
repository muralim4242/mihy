import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import { ContainerGrid, ItemGrid, Div, AppCard } from "components";
import ChildApps from "../ChildApps";
import styles from "./css";


const Apps = ({ classes,apps }) => {
  return (
    <Div className={classes.root}>
      <ContainerGrid spacing={8}>
        {apps.map((app,key) => (
          <ItemGrid xs={12} md={6} className={classes.itemGrid} key={key}>
            <AppCard {...app}>
              {app.childRoutes && <ChildApps apps={app.childRoutes}/>}
            </AppCard>
          </ItemGrid>
        ))}
      </ContainerGrid>
    </Div>
  );
};

Apps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Apps);


// <BloodList bloodList={[
//   {
//     displayName: "A+",
//     code: "aPositive"
//   },
//   {
//     displayName: "B+",
//     code: "bPositive"
//   },
//   {
//     displayName: "AB+",
//     code: "abPositive"
//   },
//   {
//     displayName: "O+",
//     code: "oPositive"
//   },
//   {
//     displayName: "A-",
//     code: "aNegative"
//   },
//   {
//     displayName: "B-",
//     code: "bNegative"
//   },
//   {
//     displayName: "AB-",
//     code: "abNegative"
//   },
//   {
//     displayName: "O-",
//     code: "oNegative"
//   }
// ]}/>
