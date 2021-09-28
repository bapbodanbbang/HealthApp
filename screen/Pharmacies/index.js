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

const Pharmacies = ({navigation}) => {
  const pharmaciesData = [
    {
      title: '약국A',
      distance: '거리 : 100m',
      score: '평점 : 5',
      tag: '#친절해요',
    },
    {
      title: '약국B',
      distance: '거리 : 100m',
      score: '평점 : 5',
    },
    {
      title: '약국C',
      distance: '거리 : 100m',
      score: '평점 : 5',
    },
  ];

  const selectedPharmacyData = {
    title: '약국A',
    distance: '거리 : 100m',
    score: '평점 : 5',
    tag: '#친절해요',
  };

  const ItemSperatorView = () => {
    return <View style={styles.ItemSperatorView} />;
  };

  const ItemView = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.ItemView}>
          <Image
            style={styles.PharmacyImage}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View style={styles.PharmacyView}>
            <Text style={styles.Item}>{item.title}</Text>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                navigation.navigate('Map', {selectedPharmacyData});
              }}>
              <Image
                style={styles.MapViewIcon}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </TouchableOpacity>
            <Text style={styles.Item}>{item.distance}</Text>
            <Text style={styles.Item}>{item.score}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <TextInput style={styles.TextInput} placeholder="약을 검색해 보세요" />
      <FlatList
        data={pharmaciesData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSperatorView}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1},
  Item: {
    padding: 5,
  },
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemSperatorView: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  TextInput: {
    flex: 0.1,
    height: 100,
    padding: 0,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
  },
  PharmacyImage: {height: 100, width: 100, margin: 10},
  PharmacyView: {
    flex: 1,
    flexDirection: 'column',
  },
  MapViewIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    width: 20,
    marginRight: 10,
  },
  TouchableOpacity: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    width: 20,
    marginRight: 10,
  }
};

export default Pharmacies;
