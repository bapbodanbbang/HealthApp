import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const SearchButton = props => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.SearchButtonView}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => setShow(true)}>
        <Text style={styles.SearchText}>약국 선택하기</Text>
      </TouchableOpacity>
      {show ? (
        <View
          style={{
            position: 'absolute',
            bottom: 300,
            left: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 200,
            height: 80,
            borderRadius: 10,
            shadowColor: '#000000',
          }}>
          <View
            style={{
              backgroundColor: '#29B6F6',
              justifyContent: 'center',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              width: 200,
              height: 50,
              textAlign: 'center',
              fontSize: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              조제요청 완료
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              width: 200,
              height: 35,
              textAlign: 'center',
              fontSize: 15,
            }}
            onTouchEnd={() => setShow(false)}>
            <Text style={{textAlign: 'center', color: '#29B6F6'}}>확인</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = {
  TouchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 40,
    top: 10,
    backgroundColor: '#29B6F6',
    borderRadius: 8,
    marginLeft: 35,
  },
  SearchText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
};

export default SearchButton;
