
import { View, Text } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import ChooseLocation from './src/Screens/ChooseLocation';
  

const Stack=createStackNavigator();
 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;