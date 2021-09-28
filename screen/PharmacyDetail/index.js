import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

const PharmacyDetail = ({navigation}) => {
  const pharmacyData = {
    title: '약국A',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    phone: '',
    location: '서울특별시 연세로 2나길 61',
    schedule: [],
    distance: '거리 : 100m',
    score: '평점 : 5',
    tag: '#친절해요',
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Image
        style={styles.PharmacyImage}
        source={{
          uri: pharmacyData.imageUri,
        }}
      />
      <View style={styles.Call}>
        <Text style={styles.Call_Text}>{pharmacyData.title}</Text>
        <Button style={styles.Call_Button} title="전화하기" />
      </View>
      <View style={styles.Location}>
        <View>
          <Text style={styles.Location_Text}>위치</Text>
          <Text style={styles.Location_Text}>{pharmacyData.location}</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => {
            navigation.navigate('Map');
          }}>
          <Image
            style={styles.MapViewIcon}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Location_Text}>영업시간</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1},
  PharmacyImage: {height: 150, width: '100%'},
  Call: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  Call_Text: {
    margin: 15,
  },
  Call_Button: {
    margin: 15,
  },
  Location: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  Location_Text: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  MapViewIcon: {
    top: 0,
    right: 0,
    height: 30,
    width: 30,
    marginRight: 10,
  },
};

export default PharmacyDetail;
