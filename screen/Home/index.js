import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Button
        title="Go to Prescriptions"
        onPress={() => navigation.navigate("Prescriptions")}
      />
    </View>
  );
};

export default Home;
