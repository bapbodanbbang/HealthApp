import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import markIcon from '../../images/mark.png';
import goBackIcon from '../../images/goBack.png';
import pharmacyDetailImage from '../../images/pharmacyDetail.png';
import mapIcon from '../../images/map.png';
import SearchButton from '../../component/SelectPharmacyButton';
import onProgress from '../../images/onProgress.png';

const PharmacyDetail = ({navigation}) => {
  const pharmacyData = {
    title: '약국A',
    phone: '010-5193-9519',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    location: '서울특별시 연세로 2나길 61',
    schedule: [],
    distance: '거리 : 100m',
    score: '평점 : 5',
    tag: '#친절해요',
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.DetailHeader}>
          <View style={styles.GoBack}>
            <Image source={goBackIcon} style={styles.GoBackIcon} />
            <Text style={styles.goBackPharmacyTitle}>{pharmacyData.title}</Text>
          </View>
          <Image source={markIcon} />
        </View>
        <Image style={styles.PharmacyImage} source={pharmacyDetailImage} />
        <View style={styles.Call}>
          <View>
            <Text style={styles.Call_Text}>{pharmacyData.title}</Text>
            <Text style={styles.Call_Phone}>{pharmacyData.phone}</Text>
          </View>
          <TouchableOpacity style={styles.Call_Button}>
            <Text style={styles.Call_Button_Text}>전화하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Blank}></View>
        <View style={styles.Location}>
          <View>
            <Text style={styles.Location_Text}>약국 위치</Text>
            <Text style={styles.Location_Text_Address}>
              {pharmacyData.location}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => {
              navigation.navigate('Map');
            }}>
            <Image style={styles.MapViewIcon} source={mapIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.Blank}></View>
        <View>
          <Text style={styles.Time_Text}>영업시간</Text>
          <View style={styles.OnPregress}>
            <Text style={styles.OnProgress_Text}>09:00 ~ 18:00</Text>
            <Image source={onProgress} />
          </View>
          <View style={styles.WeeklySchedule}>
            <View style={styles.ScheduleView}>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleText}>월</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleText}>화</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
            </View>
            <View style={styles.BlankLine}></View>
            <View style={styles.ScheduleView}>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleText}>수</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleText}>목</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
            </View>
            <View style={styles.BlankLine}></View>
            <View style={styles.ScheduleView}>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleText}>금</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleSaturDay}>토</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
            </View>
            <View style={styles.BlankLine}></View>
            <View style={styles.ScheduleView}>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleHoliDay}>일</Text>
                <Text style={styles.ScheduleTime}>09:00 ~ 18:00</Text>
              </View>
              <View style={styles.ScheduleDetail}>
                <Text style={styles.ScheduleHoliDay}>공휴일</Text>
                <Text style={styles.ScheduleTime}>약국에 문의</Text>
              </View>
            </View>
          </View>
        </View>
        <SearchButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  SafeAreaView: {flex: 1},
  DetailHeader: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 20,
  },
  GoBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoBackIcon: {
    marginRight: 10,
  },
  goBackPharmacyTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  PharmacyImage: {height: 150, width: '100%'},
  Call: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Call_Text: {
    marginLeft: 15,
    marginTop: 35,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  Call_Phone: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 25,
  },
  Call_Button: {
    margin: 15,
    padding: 10,
    width: 90,
    height: 38,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#0277BD',
    color: '#0277BD',
    justifyContent: 'center',
  },
  Call_Button_Text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0277BD',
  },
  Blank: {
    height: 10,
    backgroundColor: '#E9E9E9',
  },
  Location: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  Location_Text: {
    color: '#64696E',
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  Location_Text_Address: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  MapViewIcon: {
    right: 15,
    padding: 15,
    bottom: 10,
    height: 25,
    width: 25,
  },
  Time_Text: {
    color: '#64696E',
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  OnPregress: {
    marginLeft: 15,
    flexDirection: 'row',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  OnProgress_Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  WeeklySchedule: {
    margin: 20,
    backgroundColor: '#E9E9E9',
    width: 350,
    height: 185,
    borderRadius: 10,
  },
  ScheduleView: {
    flexDirection: 'row',
  },
  ScheduleDetail: {
    width: 175,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ScheduleText: {
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
    fontSize: 14,
  },
  ScheduleTime: {
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 10,
    fontSize: 14,
  },
  ScheduleSaturDay: {
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
    fontSize: 14,
    color: '#29B6F6',
  },
  ScheduleHoliDay: {
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
    fontSize: 16,
    color: '#F4511E',
  },
  BlankLine: {
    borderWidth: 0.5,
    width: 300,
    borderColor: '#C8CDD2',
    marginTop: 10,
    marginLeft: 20,
  },
};

export default PharmacyDetail;
