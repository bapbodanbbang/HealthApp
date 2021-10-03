import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const SearchButton = props => {
  return (
    <View style={styles.SearchButtonView}>
      <TouchableOpacity style={styles.TouchableOpacity} onPress={props.onPress}>
        <Text style={styles.SearchText}>약국 선택하기</Text>
      </TouchableOpacity>
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
