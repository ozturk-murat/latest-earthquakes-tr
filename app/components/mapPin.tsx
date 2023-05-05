import { Earthquake } from "../api/earthquakeList";
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MapPinProps } from "../types/layout";

const MapPin: React.FC<MapPinProps> = ({ data }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: data.geometry.coordinates[0],
    lng: data.geometry.coordinates[1],
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API || "",
  });
  
  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : <div>Loading...</div>;
};

export default MapPin;