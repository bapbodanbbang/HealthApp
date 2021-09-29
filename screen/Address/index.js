import axios from 'axios';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Postcode from 'react-native-daum-postcode';

const API_KEY = '9d0926f24a6ced01ea1997feba8bea03';

const Address = ({navigation}) => {
  const [location, setLocation] = useState({});

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Postcode
          style={{width: 400, height: 200}}
          jsOptions={{animated: true}}
          onSelected={data => {
            axios
              .get(
                `https://dapi.kakao.com/v2/local/search/address.json?query=${data.address}`,
                {
                  headers: {
                    Authorization: `KakaoAK 9d0926f24a6ced01ea1997feba8bea03`,
                  },
                },
              )
              .then(res => {
                const locationObj = res.data.documents[0];
                setLocation({
                  locationX: locationObj.address.x,
                  locationY: locationObj.address.y,
                });

                navigation.navigate('Map', {
                    locationX: locationObj.address.x,
                    locationY: locationObj.address.y,
                  });
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Address;
