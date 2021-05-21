import React from "react";

import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

import { MapWrapper } from "./google-map.styles";

function Map() {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 46.579719458799026, lng: 26.91486504224363 }}
    >
      <Marker position={{ lat: 46.581771, lng: 26.914068 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleHarta = () => {
  return (
    <MapWrapper>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </MapWrapper>
  );
};

export default GoogleHarta;
