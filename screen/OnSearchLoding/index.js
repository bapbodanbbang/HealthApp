/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text} from 'react-native';

const OnSearchLoding = ({navigation, route}) => {
  const pharmacyList = [
    {
      title: 'A',
      lat: 1,
      lng: 1,
    },
    {
      title: 'B',
      lat: 3,
      lng: 3,
    },
    {
      title: 'D',
      lat: 2,
      lng: 2,
    },
  ];

  const getDistanceFromLocationMeter = (lat1, lng1, lat2, lng2) => {
    function deg2rad(deg) {
      return deg * (Math.PI / 100);
    }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below var dLon = deg2rad(lng2-lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 1000; // Distance in m
    return d;
  };

  const getPharmacyByMedicine = medecineList => {
    
  };

  return (
    <View>
      <Text>{JSON.stringify(route.params.selectedData)}</Text>
    </View>
  );
};

export default OnSearchLoding;
