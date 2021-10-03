/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../component/Header';

const Map = ({route, navigation}) => {
  const [locations, setLocations] = useState([
    {
      latitude: 37.498697,
      longitude: 127.028048,
    },
  ]);

  let _watchId;
  useEffect(() => {
    _watchId = Geolocation.watchPosition(
      position => {
        setLocations([
          {
            latitude: 37.498697,
            longitude: 127.028048,
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
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          {locations.map((location, index) => {
            console.log(location);
            return (
              <Marker
                key={`location-${index}`}
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            );
          })}
        </MapView>
      )}
    </View>
  );
};

export default Map;
