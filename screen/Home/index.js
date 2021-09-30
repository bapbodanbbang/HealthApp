import React, {useState, useEffect, useRef} from 'react';
import {Text, View, SafeAreaView, TextInput, Image} from 'react-native';
import Header from '../../component/Header';
import PrescriptionPopup from '../../component/PrescriptionPopup';
import {
  SearchMedicineList,
  SeletecMedicineLIst,
} from '../../component/MedicineList';
import backgroundImage from '../../images/Group1435.png';
import SearchButton from '../../component/SearchButton';

const Home = ({route, navigation}) => {
  const [location, setLocation] = useState(
    route.params && route.params.location.address_name
      ? route.params.location.address_name
      : '강동구 길동 347-30',
  );
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

  const onPressSearchPharmacies = () => navigation.navigate('OnSearchLoding', selectedData);
  const onPressSearchAddress = () => navigation.navigate('Address');

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

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Header location={location} onPressSearchAddress={onPressSearchAddress}/>
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
      {!isFocusSearchBar ? (
        <View style={styles.SearchByPrescription}>
          <Text
            style={styles.PrescriptionText}
            onPress={() => {
              setIsClickPrescriptionText(true);
            }}>
            처방전으로 약 검색
          </Text>
        </View>
      ) : null}
      {isFocusSearchBar ? (
        <SearchMedicineList
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          setIsFocusSearchBar={setIsFocusSearchBar}
          textInputFocusRef={textInputFocusRef}
          searchFilter={searchFilter}
        />
      ) : selectedData.length ? (
        <SeletecMedicineLIst
          setSelectedData={setSelectedData}
          selectedData={selectedData}
        />
      ) : (
        <View style={styles.backgroundImageView}>
          <Image source={backgroundImage} style={styles.backgroundImage} />
        </View>
      )}
      <SearchButton onPress={onPressSearchPharmacies} />
      {isClickPrescriptionText && <PrescriptionPopup />}
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1, backgroundColor: 'white'},
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
  Hidden: {
    height: 0,
    width: 0,
  },
  SearchByPrescription: {
    position: 'relative',
    backgroundColor: 'white',
    height: 50,
  },
  backgroundImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 0.4,
  },
  PrescriptionText: {
    position: 'absolute',
    textDecorationLine: 'underline',
    color: '#4285FF',
    right: 25,
  },
};

export default Home;
