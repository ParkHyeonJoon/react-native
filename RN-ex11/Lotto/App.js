import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
// import HomeF from './screens/HomeF';
// import HomeP from './screens/HomeP';
import LottoGenerator from './screens/LottoGenerator';
import ClockDigital from './screens/ClockDigital';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LottoGenerator" component={LottoGenerator} />
        <Stack.Screen name="ClockDigital" component={ClockDigital} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;