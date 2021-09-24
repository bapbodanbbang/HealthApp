import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from "./screen/Home";
import Prescriptions from "./screen/Prescriptions";

// import 'react-native-gesture-handler';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Prescriptions" component={Prescriptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
