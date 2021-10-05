/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../component/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import goBackIcon from '../../images/goBack.png';

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
      <View
        style={{
          top: 30,
          left: 20,
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 30, height: 30, marginBottom: 30, marginRight: 120}}
            source={goBackIcon}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            marginRight: 200,
            marginBottom: 30,
          }}>
          지도
        </Text>
      </View>
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
