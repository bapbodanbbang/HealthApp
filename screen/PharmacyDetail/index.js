import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const PharmacyDetail = ({navigation}) => {
  const pharmacyData = {
    title: '약국A',
    distance: '거리 : 100m',
    score: '평점 : 5',
    tag: '#친절해요',
  };

  return <SafeAreaView style={styles.SafeAreaView}></SafeAreaView>;
};

const styles = {};

export default PharmacyDetail;
