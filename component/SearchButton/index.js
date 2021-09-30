import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const SearchButton = props => {
  return (
    <View style={styles.SearchButtonView}>
      <TouchableOpacity style={styles.TouchableOpacity} onPress={props.onPress}>
        <Text style={styles.SearchText}>근처 약국에 물어보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  SearchButtonView: {flex: 0.1, justifyContent: 'center', alignItems: 'center'},
  TouchableOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 200,
    bottom: 50,
    backgroundColor: '#4285FF',
    borderRadius: 10,
  },
  SearchText: {
    fontSize: 15,
    color: '#FFFFFF',
  },
};

export default SearchButton;
