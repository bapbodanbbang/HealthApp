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
      title: '약국A',
      distance: '거리 100m',
      score: '5',
      tag: ['친절해요'],
    },
    {
      id: 2,
      title: '약국B',
      distance: '거리 100m',
      score: '5',
      tag: ['친절해요', '또 가고 싶어요'],
    },
    {
      id: 3,
      title: '약국C',
      distance: '거리 100m',
      score: '5',
      tag: [],
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
                    return <Text style={styles.Tag}>{value}</Text>;
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
    backgroundColor: '#94ABC8',
    color: 'white',
    margin: 3,
    padding: 4,
    borderRadius: 100,
    textAlign: 'center',
  },
};

export default Pharmacies;
