/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Map = ({route, navigation}) => {
  console.log(route.params.locationX && route.params.locationY);

  const [locations, setLocations] = useState([
    route.params.locationX && route.params.locationY
      ? {
          latitude: Number(route.params.locationX),
          longitude: Number(route.params.locationY),
        }
      : null,
  ]);

  let _watchId;
  useEffect(() => {
    _watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocations([
          {
            latitude: route.params.locationX
              ? Number(route.params.locationX)
              : latitude,
            longitude: route.params.locationY
              ? Number(route.params.locationY)
              : longitude,
          },
        ]);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 100,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  }, [locations]);

  useEffect(() => {
    return () => {
      if (_watchId !== null) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {locations.length > 0 && (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.015,
          }}>
          {locations.map((location, index) => {
            console.log(location);
            return (<Marker
              key={`location-${index}`}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            />);
          })}
        </MapView>
      )}
    </View>
  );
};

export default Map;
