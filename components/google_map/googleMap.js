import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Googlemap = (props) => {
  const defaultProps = {
    center: {
      lat: 33.5512737,
      lng: 73.1232077,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCGp4Gstw84ARGhnQBgAOo7QszqCq8zvfI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} text="Gubloo Technologies Pvt ltd, Civic Center Bahria Town Civic Center Bahria Town, Rawalpindi" />
      </GoogleMapReact>
    </div>
  );
};
export default Googlemap;
