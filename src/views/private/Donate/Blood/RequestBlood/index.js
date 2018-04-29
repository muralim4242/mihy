import React from "react";
import { MyMapComponent,Div,SingleValuedDropdown,WhitePaper,RoundButton} from "components";
import BloodList from "./components/BloodList";
import { withStyles } from 'material-ui/styles';
// import Button from 'material-ui/Button';
import styles from "./css"

const RequestBlood = ({classes,bloodList,currLoc,setLocation,getMyLoc}) => {
  return (
    <Div className="map-box">
      <MyMapComponent isMarkerShown={true} currLoc={currLoc} setLocation={setLocation} getMyLoc={getMyLoc}/>
      <BloodList bloodList={bloodList}/>
      <RoundButton ariaLabel="add" parentOverrideClass={classes.buttonSend} icon="send"/>
      <RoundButton ariaLabel="cancel" parentOverrideClass={classes.buttonCancel} icon="close"/>
    </Div>
  );
};

export default withStyles(styles)(RequestBlood);
