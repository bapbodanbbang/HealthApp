import React from 'react';
import {View, Image, Text} from 'react-native';

import locationImage from '../../images/ic_map_pin.png';
import myPageIcon from '../../images/btn_mypage.png';
import mapSearchIcon from '../../images/ic_map_search.png';

const Header = props => {
  return (
    <View style={styles.HeaderView}>
      <View style={styles.HeaderLocation}>
        <Image style={styles.LocationIcon} source={locationImage} />
        <Text style={styles.LocationText} numberOfLines={1}>
          {' '}
          {props.location}{' '}
        </Text>
        <View onTouchStart={props.onPressSearchAddress}>
          <Image source={mapSearchIcon} />
        </View>
      </View>
      <Image source={myPageIcon} style={styles.myPage}/>
    </View>
  );
};

const styles = {
  HeaderView: {
    marginTop: 10,
    marginBottom: 10,
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderLocation: {flexDirection: 'row', alignItems: 'center'},
  LocationIcon: {marginRight: 5},
  LocationText: {width: 150, marginRight: 5, textAlign: 'center'},
  myPage: {
    position: 'absolute',
    right: 30,
  }
};

export default Header;
