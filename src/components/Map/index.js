import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const API_KEY = "AIzaSyB0O4tUXPQgjMhTAbct2UHHfw4IpEq9SzU";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, minWidth: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    // clickableIcons={false}
    options={{
      // mapTypeControl: false,
      // disableDoubleClickZoom: true,
      // draggable: false,
      // fullscreenControl: false,
      // scaleControl: false,
      // scrollwheel: false,
      // streetViewControl: false,
      // zoomControl: false,
      styles: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit.line",
          stylers: [{ visibility: "off" }]
        },
        { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ visibility: "off" }] }
      ]
    }}
  >
    {props.isMarkerShown && props.markers.map((marker,markerKey)=>(
      <Marker position={{...marker}} key={markerKey}/>
    ))}
  </GoogleMap>
));

export default MyMapComponent;
