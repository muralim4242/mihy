import React from "react";
import RequestBlood from "views/private/Donate/Blood/RequestBlood"

// var add = {};

class RequestBloodContainer extends React.Component {
  state={
    currLoc: { lat: 21.7679, lng: 78.8718 },
    pickedLoc: {}
  }

  componentDidMount=()=>{
    this.getMyLocation();
  }
  //For Compass Click -- set map to current location
  getMyLocation = () => {
    if (navigator.geolocation) {
      // can be resused
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            currLoc: { lat: position.coords.latitude, lng: position.coords.longitude },
          });
        },
        function(error) {
          console.log(error.code);
        }
      );
    }
  };


  // onClickPick = () => {
  //   this.convertToAddress(add);
  // };
  //
  // convertToAddress = (add) => {
  //   const { lat, lng } = add;
  //   this.setState({
  //     currLoc: {},
  //   });
  //   var geocoder = new window.google.maps.Geocoder();
  //   geocoder.geocode({ location: { lat: lat, lng: lng } }, (results, status) => {
  //     if (status === "OK") {
  //       if (results[0]) {
  //         //Results[0] gives the nearest address
  //         // this.props.handleFieldChange(this.props.formKey, "address", results[0].formatted_address);
  //       }
  //     }
  //   });
  // };


  render()
  {
    let {currLoc}=this.state;
    return(
      <RequestBlood
        currLoc={currLoc}
        getMyLoc={this.getMyLocation}
      />
    )
  }
}

export default RequestBloodContainer;
