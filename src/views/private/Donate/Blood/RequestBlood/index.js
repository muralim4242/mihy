import React from "react";
import { MyMapComponent,Div } from "components";

const RequestBlood = () => {
  return (
    <Div className="map-box">
      <MyMapComponent isMarkerShown={true} markers={[
        { lat: -34.397, lng: 150.644 },{ lat: -34.397, lng: 151.644 }
      ]} />
    </Div>
  );
};

export default RequestBlood;
