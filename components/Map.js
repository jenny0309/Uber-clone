import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
// import { GOOGLE_MAPS_APIKEY } from "@env";

// react native maps directions
// yarn add react-native-maps-directions

// delete these variables if Google API Key is available
const origin = {
  location: {
    lat: 49.2606052,
    long: -123.2481825,
  },
  description: "University of British Columbia, BC, Canada",
};
const destination = {
  location: {
    lat: 49.3428609,
    long: -123.1171131,
  },
  description: "Capilano Suspension Bridge Park, BC, Canada",
};

const Map = () => {
  //   const origin = useSelector(selectOrigin);
  //   const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom and fit to the markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          //   apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.long,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.long,
          }}
          title="Destination"
          description={destination.description}
          identifier="Destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
