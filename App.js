import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './screen/Home';
import Prescriptions from './screen/Prescriptions';
import PrescriptionDetail from './screen/PrescriptionDetail';
import OnSearchLoding from './screen/OnSearchLoding';
import Map from './screen/Map';
import Pharmacies from './screen/Pharmacies';
import PharmacyDetail from './screen/PharmacyDetail';
import Address from './screen/Address';

// import 'react-native-gesture-handler';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PharmacyDetail"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Prescriptions" component={Prescriptions} />
        <Stack.Screen
          name="PrescriptionDetail"
          component={PrescriptionDetail}
        />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="OnSearchLoding" component={OnSearchLoding} />
        <Stack.Screen name="Pharmacies" component={Pharmacies} />
        <Stack.Screen name="PharmacyDetail" component={PharmacyDetail} />
        <Stack.Screen name="Address" component={Address} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
