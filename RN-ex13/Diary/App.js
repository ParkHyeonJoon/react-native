// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './pages/List';
import Detail from './pages/Detail';
import Form from './pages/Form';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { <Stack.Screen name="List" component={List}  options={{title:'일기 목록'}}/> }
        { <Stack.Screen name="Detail" component={Detail} /> }
        { <Stack.Screen name="Form" component={Form} options={{title:'일기 작성'}}/> }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;