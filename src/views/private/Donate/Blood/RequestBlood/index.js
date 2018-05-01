import React from "react";
import { MyMapComponent,Div,RoundButton} from "components";
import {compose} from 'recompose'
import {inject,observer} from 'mobx-react';
import BloodList from "./components/BloodList";
import { withStyles } from 'material-ui/styles';
import styles from "./css"


const RequestBlood = ({classes,currLoc,getMyLoc,bloodStore}) => {
  return (
    <Div>
      <Div className="map-box">
        <MyMapComponent isMarkerShown={bloodStore.isMarkerShown} currLoc={currLoc} currentLocationIcon={bloodStore.currentLocationIcon} getMyLoc={getMyLoc} isEntityTypeShown={bloodStore.isEntityTypeShown} entityTypes={bloodStore.filteredDonorLocations} onMarkerChanged={bloodStore.handleRequesterLocationChanged} entityIcon={bloodStore.donorsLocationIcon}/>
      </Div>
      <div style={{position:"fixed",width:"100vw",bottom: "56px",left:"0"}}><BloodList bloodList={bloodStore.bloodGrps} onBloodGrpClick={bloodStore.handleBloodGrpClick}/></div>
      <RoundButton ariaLabel="add" parentOverrideClass={classes.buttonSend} icon="send"/>
      <RoundButton ariaLabel="cancel" parentOverrideClass={classes.buttonCancel} icon="close"/>
    </Div>
  );
};

export default compose(withStyles(styles),inject('bloodStore'),observer)(RequestBlood);
