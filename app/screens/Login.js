import { View, Text ,StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react';
import React from 'react'

const Login = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const auth=FIREBASE.AUTH;
 
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <TextInput style={styles,input} placeholder="Email" autoCapitalize="none"
      value={email}
      onChangeText={(text) => setEmail(text)} />
    
    <TextInput style={styles,input} placeholder="company" autoCapitalize="none"
      value={company}
      onChangeText={(text) => setCompany(text)} />

<TextInput style={styles,input} placeholder="age" autoCapitalize="none"
      value={age}
      onChangeText={(text) => setAge(text)} />

<TextInput style={styles,input} placeholder="name" autoCapitalize="none"
      value={name}
      onChangeText={(text) => setName(text)} /> 

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
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
     backgroundColor:"#FFE8C6",
     height:'100%',
     width:'100%',
    },
);
};

export default Login