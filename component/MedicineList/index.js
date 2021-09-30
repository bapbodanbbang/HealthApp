import React, {useState, useEffect} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import deleteIcon from '../../images/delete.png';

const SearchMedicineList = props => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const fetchData = () => {
    const medicines = [
      {id: 1, title: '타이레놀'},
      {id: 2, title: '케토톱'},
      {id: 3, title: '후시딘'},
      {id: 4, title: '마데카솔'},
      {id: 5, title: '게보린'},
      {id: 6, title: '알보칠'},
    ];
    setFilterData(medicines);
    setMasterData(medicines);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const ItemView = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={value => {
          props.setSelectedData([...props.selectedData, item]);
          props.setIsFocusSearchBar(false);
          props.textInputFocusRef.current.blur();
        }}>
        <View style={styles.searchItemView}>
          <Text style={styles.Item}>{item.title}</Text>
          {/* <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={value => {
              props.setSelectedData([...props.selectedData, item]);
              props.setIsFocusSearchBar(false);
              props.textInputFocusRef.current.blur();
            }}>
            <Image source={deleteIcon} />
          </TouchableOpacity> */}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.Container}>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        style={styles.FlatList}
      />
    </View>
  );
};

const SeletecMedicineLIst = props => {
  const SeletedItemView = ({item}) => {
    return (
      <View style={styles.ItemView}>
        <Text style={styles.Item}>{item.title}</Text>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => {
            props.setSelectedData(
              props.selectedData.filter(value => value.id !== item.id),
            );
          }}>
          <Image source={deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <FlatList
        data={props.selectedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={SeletedItemView}
        style={styles.FlatList}
      />
    </View>
  );
};

const styles = {
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: '#F4F6F8',
  },
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 6,
    backgroundColor: '#F4F6F8',
    borderRadius: 10,
  },
  Item: {
    padding: 15,
  },
  FlatList: {marginRight: 15, marginLeft: 15, borderWidth: 0},
  TouchableOpacity: {
    marginRight: 10,
  },
};

export {SearchMedicineList, SeletecMedicineLIst};
