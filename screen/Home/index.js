import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../component/Header';

import backgroundImage from '../../images/Group1435.png';
// import locationImage from '../../images/ic_map_pin.png';
// import myPageIcon from '../../images/btn_mypage.png';

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
      <Header />
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
        <View style={styles.Container}>
          <FlatList
            data={filterData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSperatorView}
            renderItem={ItemView}
          />
        </View>
      ) : selectedData.length ? (
        <View style={styles.Container}>
          <FlatList
            data={selectedData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSperatorView}
            renderItem={SeletedItemView}
          />
        </View>
      ) : (
        <View style={styles.backgroundImageView}>
          <Image source={backgroundImage} style={styles.backgroundImage} />
        </View>
      )}
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => {
            navigation.navigate('OnSearchLoding', {selectedData});
          }}>
          <Text style={styles.SearchText}>근처 약국에 물어보기</Text>
        </TouchableOpacity>
      </View>
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
    flex: 0.08,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 25,
    marginLeft: 25,
    borderRadius: 10,
    borderColor: '#EDEFF1',
    backgroundColor: '#F4F6F8',
  },
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
    color: '#4285FF',
    right: 25,
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
  backgroundImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 0.4,
  },
  SearchText: {
    fontSize: 15,
    color: '#FFFFFF'
  }
};

export default Home;
