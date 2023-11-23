import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Image,Button ,Text,TouchableOpacity, TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './app/screens/Login';

let lessthan="<";
var name="";
var age="";
var email="";
var company="";
const Stack = createNativeStackNavigator () ; 
  
  export default function Apps()
  {
  return (
    
      <View style={styles.container}>
        <View >
        <TouchableOpacity 
      
      onPress={() => {
        // Handle button press
      }}
    >
      <Text style={styles.arrow}>{lessthan}</Text>
    </TouchableOpacity>
        </View>
        <View>
       
         <Image
         source={require('../images/wp8160738-lord-shiva-mobile-4k-wallpapers.jpg')} // P rovide the path to your image
        style={styles.image}
        />
        
        </View>
        <View style={styles.button}>

        <TouchableOpacity 
      
      onPress={() => {
        // Handle button press
      }}
    >
      <Text >Edit Profile</Text>
    </TouchableOpacity>
        </View>
         
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer> 
        
       
     
    </View>
    

      

        
      
       
      
    
    
  );
};

const styles = StyleSheet.create({
 container:{
  backgroundColor:"#FFE8C6",
  height:'100%',
  width:'100%',

 },

  image: {
    width: '47%', // Set the image width
    height: '47%',
    borderRadius:700 ,
    justifyContent:'center',
    position:'relative',
    padding:0,
    top:'20%',
    left:'25%',
     // Set the image height
  },
  button:{
    top:'-20%',
    flexDirection: 'row',
    
    
    borderWidth:2,
    
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E8F4FF',

  },
  row: {
    flexDirection: 'row',
    top:'-50%',
    marginHorizontal: '4%',
    borderWidth:2,
    margin:'4%',
    borderRadius: 50,
    backgroundColor:'#E8F4FF',
    
    
    
    
  },
  cell: {
    
    
    padding: '4%',
    margin: '1%',
    justifyContent:'space-around',
    fontSize:17,
    
  },
  
    arrow:{
      position:'absolute',
      top:'19%',
      left:'-6%',
      buttoncolor:"black",
      marigin:'3%',
      fontSize:50,
      padding:'12%',
      size:20,
      
    
  },
  
  
  
});

 