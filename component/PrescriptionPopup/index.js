import React from 'react';
import {View, Image, Text, Button} from 'react-native';

const PrescriptionPopup = () => {
  return (
    <View style={styles.PrescriptionPopupBackGround}>
      <View style={styles.PrescriptionPopup}>
        <Text>처방전으로 약 검색</Text>
        <Text>
          사진 촬영 및 파일 업로드를 통해 처방전을 직접 등록하세요. *파일형식:
          pdf
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
  );
};

const styles = {
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
};

export default PrescriptionPopup;
