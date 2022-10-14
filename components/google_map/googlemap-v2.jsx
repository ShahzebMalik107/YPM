import React from "react";
import { Map, GoogleApiWrapper } from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <Map
      google={this.props.google}
      style={{ width: "100%", height: "100%" }}
      zoom={11}
      initialCenter = {
        {
          lat: 33.5512737,
          lng : 73.124302,
        }
      }
    ></Map>
  );
}
