import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../component/Header';
import startIcon from '../../images/star.png';
import mapIcon from '../../images/map.png';
import pharmacyImage from '../../images/pharmacy.png';

const Pharmacies = ({route, navigation}) => {
  const pharmaciesData = [
    {
      id: 1,
      title: '이즈타워약국',
      distance: '거리 100m',
      score: '4.9',
      tag: ['친절해요'],
    },
    {
      id: 2,
      title: '코코온누리약국',
      distance: '거리 100m',
      score: '4.1',
      tag: ['친절해요', '또 가고 싶어요'],
    },
    {
      id: 3,
      title: '와이약국',
      distance: '거리 100m',
      score: '5',
      tag: ['쾌적해요', '빠른 약 조제'],
    },
  ];

  const ItemView = ({item}) => {
    return (
      <TouchableWithoutFeedback
        key={item.id}
        onPress={() => {
          navigation.navigate('PharmacyDetail');
        }}>
        <View style={styles.ItemView}>
          <Image style={styles.PharmacyImage} source={pharmacyImage} />
          <View style={styles.PharmacyView}>
            <Text style={styles.Title}>{item.title}</Text>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => {
                navigation.navigate('Map');
              }}>
              <Image style={styles.MapViewIcon} source={mapIcon} />
            </TouchableOpacity>
            <Text style={styles.Distance}>{item.distance}</Text>
            <View style={styles.Score}>
              <Image source={startIcon} style={styles.Item} />
              <Text style={styles.Item}>{item.score}</Text>
            </View>
            <View style={styles.TagView}>
              {item.tag.length
                ? item.tag.map((value, index) => {
                    return (
                      <View
                        style={{
                          margin: 2,
                          borderColor: '#94ABC8',
                          borderRadius: 5,
                          borderWidth: 1,
                          backgroundColor: '#94ABC8',
                        }}>
                        <Text style={styles.Tag}>{value}</Text>
                      </View>
                    );
                  })
                : null}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Header location={route.params.location} />
      <FlatList
        data={pharmaciesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1, backgroundColor: 'white'},
  Item: {
    padding: 5,
  },
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  Title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  PharmacyImage: {height: 100, width: 100, margin: 10},
  PharmacyView: {
    flex: 1,
    flexDirection: 'column',
  },
  MapViewIcon: {
    position: 'absolute',
    top: 6,
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
    zIndex: 1,
  },
  Distance: {
    fontSize: 10,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 10,
    color: '#898989',
  },
  Score: {
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  TagView: {
    flexDirection: 'row',
  },
  Tag: {
    color: 'white',
    margin: 3,
  },
};

export default Pharmacies;
