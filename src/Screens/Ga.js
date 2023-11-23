import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home1 from "./Home"
function GaMain({ navigation }) {
return (
<Text onPress={() => navigation.navigate('Home1')}>Ganapati</Text>
);

}
const RootStack = createStackNavigator();

function Ga() {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={GaMain} options={{ headerShown: false }} />
                </RootStack.Group>
                <RootStack.Group >
                    <RootStack.Screen name="Home1" component={Home1} />
                    
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};


export default Ga;