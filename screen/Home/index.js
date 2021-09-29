import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';

const Home = ({navigation}) => {
  const [searchWord, setSearchWord] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [isFocusSearchBar, setIsFocusSearchBar] = useState(false);
  const [isClickPrescriptionText, setIsClickPrescriptionText] = useState(false);
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
      <View style={styles.SearchByPrescription}>
        <Text
          style={styles.PrescriptionText}
          onPress={() => {
            setIsClickPrescriptionText(true);
          }}>
          처방전으로 약 검색
        </Text>
      </View>
      {isFocusSearchBar ? (
        <View style={isFocusSearchBar ? styles.Container : styles.Hidden}>
          <FlatList
            data={filterData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSperatorView}
            renderItem={ItemView}
          />
        </View>
      ) : (
        <View style={styles.Container}>
          <FlatList
            data={selectedData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSperatorView}
            renderItem={SeletedItemView}
          />
        </View>
      )}
      <Button
        style={styles.Button}
        title="근처 약국에 물어보기"
        onPress={() => {
          navigation.navigate('OnSearchLoding', {selectedData});
        }}
      />
      {isClickPrescriptionText && (
        <View style={styles.PrescriptionPopupBackGround}>
          <View style={styles.PrescriptionPopup}>
            <Text>처방전으로 약 검색</Text>
            <Text>
              사진 촬영 및 파일 업로드를 통해 처방전을 직접 등록하세요. *파일
              형식: pdf
            </Text>
          </View>
          <Image
            style={styles.PrescriptionImage}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View style={styles.PrescriptionPopupButton}>
            <Button title="test1" />
            <Button title="test2" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1, backgroundColor: 'white'},
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
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
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
  SearchByPrescription: {
    position: 'relative',
    backgroundColor: 'white',
    height: 50,
  },
  PrescriptionText: {
    position: 'absolute',
    textDecorationLine: 'underline',
    top: 10,
    right: 10,
  },
  PrescriptionPopup: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 400,
    bottom: 0,
  },
  PrescriptionPopupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PrescriptionImage: {height: 150, width: '100%'},
};

export default Home;
