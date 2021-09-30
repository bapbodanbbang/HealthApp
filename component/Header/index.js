import React from 'react';
import {View, Image, Text} from 'react-native';

import locationImage from '../../images/ic_map_pin.png';
import myPageIcon from '../../images/btn_mypage.png';

const Header = () => {
  return (
    <View style={styles.HeaderView}>
      <View style={styles.HeaderLocation}>
        <Image style={styles.LocationIcon} source={locationImage} />
        <Text> 서울특별시 강동구 길동 347-30 </Text>
      </View>
      <Image source={myPageIcon} />
    </View>
  );
};

const styles = {
  HeaderView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
  HeaderLocation: {flexDirection: 'row', alignItems: 'center'},
  LocationIcon: {marginRight: 5}
};

export default Header;
