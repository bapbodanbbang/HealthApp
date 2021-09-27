import React, {useState, useEffect,useRef} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const Home = ({navigation}) => {
  const [searchWord, setSearchWord] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [isFocusSearchBar, setIsFocusSearchBar] = useState(false);
  const textInputFocusRef = useRef();

  const fetchData = () => {
    const json = [
      {id: 1, title: '타이레놀'},
      {id: 2, title: '케토톱'},
      {id: 3, title: '후시딘'},
      {id: 4, title: '마데카솔'},
      {id: 5, title: '게보린'},
      {id: 6, title: '알보칠'},
    ];
    setFilterData(json);
    setMasterData(json);
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearchWord(text);
    } else {
      setFilterData(masterData);
      setSearchWord(text);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const SeletedItemView = ({item}) => {
    return (
      <View style={styles.ItemView}>
        <Text style={styles.Item}>{item.title}</Text>
        <Button
          title="Delete"
          onPress={() => {
            setSelectedData(selectedData.filter(value => value.id !== item.id));
          }}
        />
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.ItemView}>
          <Text style={styles.Item}>{item.title}</Text>
          <Button
            title="Select"
            onPress={value => {
              setSelectedData([...selectedData, item]);
              setIsFocusSearchBar(false);
              textInputFocusRef.current.blur();
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const ItemSperatorView = () => {
    return <View style={styles.ItemSperatorView} />;
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <TextInput
        style={styles.TextInput}
        value={searchWord}
        onChangeText={text => searchFilter(text)}
        placeholder="약을 검색해 보세요"
        onFocus={() => {
          setIsFocusSearchBar(true);
        }}
        ref={textInputFocusRef}
      />
      <View style={isFocusSearchBar ? styles.Hidden : styles.Container}>
        <FlatList
          data={selectedData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSperatorView}
          renderItem={SeletedItemView}
        />
      </View>
      <View style={isFocusSearchBar ? styles.Container : styles.Hidden}>
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSperatorView}
          renderItem={ItemView}
        />
      </View>
      <Button style={styles.Button} title="근처 약국에 물어보기" />
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1},
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Item: {
    padding: 15,
  },
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  Button: {
    flex: 1,
    position: 'absolute',
    buttom: 0,
  },
  Hidden: {
    height: 0,
    width: 0,
  },
};

export default Home;
