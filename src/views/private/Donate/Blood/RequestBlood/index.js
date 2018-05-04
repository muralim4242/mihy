import React from "react";
import { MyMapComponent, Div, RoundButton } from "components";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import BloodList from "./components/BloodList";
import Modal from "material-ui/Modal";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
// import { CircularProgress } from 'material-ui/Progress';
import { LinearProgress } from "material-ui/Progress";
import Button from "material-ui/Button";
import styles from "./css";

const RequestBlood = ({ classes, currLoc, getMyLoc, bloodStore }) => {
  return (
    <Div>
      <Div className="map-box">
        <MyMapComponent
          isMarkerShown={bloodStore.isMarkerShown}
          currLoc={currLoc}
          currentLocationIcon={bloodStore.currentLocationIcon}
          getMyLoc={getMyLoc}
          isEntityTypeShown={bloodStore.isEntityTypeShown}
          entityTypes={bloodStore.filteredDonorLocations}
          onMarkerChanged={bloodStore.handleRequesterLocationChanged}
          entityIcon={bloodStore.donorsLocationIcon}
        />
      </Div>
      <div
        style={{ position: "fixed", width: "100vw", bottom: "56px", left: "0" }}
      >
        <BloodList
          bloodList={bloodStore.bloodGrps}
          onBloodGrpClick={bloodStore.handleBloodGrpClick}
          selectedBloodGroupForSearch={bloodStore.selectedBloodGroupForSearch}
        />
      </div>
      <RoundButton
        ariaLabel="add"
        parentOverrideClass={classes.buttonSend}
        icon="send"
        onClick={() => {
          bloodStore.toggleSendModal("open");
        }}
        disabled={bloodStore.selectedBloodGroupForSearch?false:true}
      />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={bloodStore.openSendModal}
        disableBackdropClick={true}
      >
        <div className={classes.paper} align="center">
          <Typography variant="title" id="modal-title">
            Searching for donor
          </Typography>
          <br />
          {bloodStore.timer !== bloodStore.waitingTime && <LinearProgress color="secondary" />}
          <Typography variant="headline" style={{ fontSize: "60px" }}>
            {bloodStore.timer}
          </Typography>
          {bloodStore.timer !== bloodStore.waitingTime && <LinearProgress />}
          <br />
          {bloodStore.timer === bloodStore.waitingTime && (
            <Button
              style={{ margin: "8px" }}
              variant="raised"
              size="small"
              color="primary"
              onClick={() => {
                bloodStore.sendRequest();
              }}
            >
              Try again
            </Button>
          )}
          <Button
            variant="raised"
            size="small"
            color="secondary"
            onClick={() => {
              bloodStore.toggleSendModal("close");
            }}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </Div>
  );
};

export default compose(withStyles(styles), inject("bloodStore"), observer)(
  RequestBlood
);
