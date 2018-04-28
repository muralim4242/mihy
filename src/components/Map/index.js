import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow
} from "react-google-maps";
import isEqual from "lodash/isEqual";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import {RoundButton} from 'components';
import get from 'lodash/get';
import "./index.css";

const API_KEY = "AIzaSyB0O4tUXPQgjMhTAbct2UHHfw4IpEq9SzU";

const searchBoxStyles ={
  zIndex: 0,
  position: "absolute",
  left: "20px",
  top: "0px",
}

const addressBoxCloseIconSymbol = {
  position: "relative",
  top: "8px",
  color: "black",
  right: "8px",
  width: "8px",
  height: "8px"
};

const addressBoxStyle = {
  // opacity: 0.6,
  borderRadius: "2px",
  // -webkit-backdrop-filter:" blur(1px)",
  backdropFilter: "blur(1px)",
  backgroundColor: "white",
  boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.24)",
  fontSize: "10px !important",
  fontWeight: "normal",
  fontstyle: "normal",
  fontStretch: "normal",
  lineHeight: 1.4,
  letterSpacing: "normal",
  textAlign: "left",
  color: "black",
  padding: "10px 18px 10px 12px",
  width: "160px"
};

let bounds;
let gMap;

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      // global.google = window.google;
      // var SlidingMarker = require("marker-animate-unobtrusive");
      // SlidingMarker.initializeGlobally();
      const refs = {}

      this.setState({
        bounds: null,
        center: { lat: 21.7679, lng: 78.8718 },
        markers: [],
        onMapMounted: ref => {
          refs.gMap = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.gMap.getBounds(),
            center: refs.gMap.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new window.google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.gMap.fitBounds(bounds);
        },
      })
    },

    componentDidMount() {
      this.reRender(this.props);
    },

    componentWillReceiveProps(nextProps) {
      if (isEqual(this.props, nextProps)) {
        this.reRender(nextProps);
      }
    },

    reRender(props, rndBool) {
      if (props.isDirectionShown) {
        const DirectionsService = new window.google.maps.DirectionsService();
        bounds = new window.google.maps.LatLngBounds();
        let waypts = [];
        const fitBound = () => {
          // Create bounds from markers
          if (gMap) {
            bounds.extend(
              new window.google.maps.LatLng(
                props.destination.lat - 0.01,
                props.destination.lng + 0.01
              )
            );
            for (var index in waypts) {
              var latlng = new window.google.maps.LatLng(
                waypts[index].location.lat(),
                waypts[index].location.lng()
              );
              bounds.extend(latlng);
            }
            // Don't zoom in too far on only one marker
            if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
              var extendPoint1 = new window.window.google.maps.LatLng(
                bounds.getNorthEast().lat() + 0.01,
                bounds.getNorthEast().lng() + 0.01
              );
              var extendPoint2 = new window.window.google.maps.LatLng(
                bounds.getNorthEast().lat() - 0.01,
                bounds.getNorthEast().lng() - 0.01
              );
              bounds.extend(extendPoint1);
              bounds.extend(extendPoint2);
            }

            gMap.fitBounds(bounds);
          }
          // Adjusting zoom here doesn't work :/
        };
        const getDestinationDirection = () => {
          DirectionsService.route(
            {
              origin: new window.google.maps.LatLng(
                props.source.lat,
                props.source.lng
              ),
              destination: new window.google.maps.LatLng(
                props.destination.lat,
                props.destination.lng
              ),
              travelMode: window.google.maps.TravelMode.DRIVING,
              waypoints: waypts,
              optimizeWaypoints: true
            },
            (result, status) => {
              if (status === window.google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                  waypoints: waypts
                });
                bounds.union(result.routes[0].bounds);
                fitBound();
              }
            }
          );
        };
        getDestinationDirection();
      }
    }
  })
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={5}
    defaultCenter={props.center}
    center={props.currLoc ? props.currLoc : props.center}
    onBoundsChanged={props.onBoundsChanged}
    options={{
          mapTypeControl: false,
          draggable: true,
          fullscreenControl: false,
          scaleControl: true,
          scrollwheel: true,
          streetViewControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.LEFT_BOTTOM
          }
        }}
  >
    <div className="search-icon">
      <i
        id="searchIcon"
        style={{
          height: 24,
          width: 24,
          color: "#484848"
        }}
        className="material-icons"
      >
        search
      </i>
    </div>

    <RoundButton ariaLabel="My Location" parentOverrideClass="my-location" icon="my_location" handleClick={props.getMyLoc}/>

    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}

    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        className="searchBoxStyles"
        placeholder="Search address"
        style={searchBoxStyles}
      />
    </SearchBox>

    {props.isDirectionShown &&
      props.directions && (
        <DirectionsRenderer
          directions={props.directions}
          options={{
            preserveViewport: true,
            suppressMarkers: true,
            polylineOptions: {
              strokeColor: "#0bb4f1",
              strokeOpacity: 0,
              icons: [
                {
                  icon: {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    fillOpacity: 1,
                    scale: 3
                  },
                  offset: "0",
                  repeat: "1px"
                }
              ]
            }
          }}
        />
      )}

    {props.isEntityTypeShown &&
      props.entityTypes.map((entity, entityKey) => {
        if (entity.isLabelShown) {
          return (
            <MarkerWithLabel
              key={entityKey}
              labelVisible={entity.labelStatus}
              // zIndex={1000}
              position={{ ...entity.position }}
              labelAnchor={new window.google.maps.Point(0, 0)}
              labelStyle={addressBoxStyle}
              onClick={() => props.onInfoBoxToggle(entityKey)}
              icon={entity.icon}
            >
              <InfoWindow onCloseClick={props.onToggleOpen}>{entity.position && entity.position.lat} </InfoWindow>
            </MarkerWithLabel>
          );
        } else {
          return (
            <Marker
              position={{ ...entity.position }}
              key={entityKey}
              icon={entity.icon}
            />
          );
        }
      })}
  </GoogleMap>
));

export default MyMapComponent;
