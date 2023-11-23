import React, { useState, useEffect,useRef } from 'react';
import { View, StyleSheet,Image,Button ,Text,TouchableOpacity, TextInput} from 'react-native';
import MapView, {Marker}from 'react-native-maps';
import { GOOGLE_MAPS_APIKEY } from './googleMapKey';
import MapViewDirections from 'react-native-maps-directions';
const App=()=>{
  const[state,setState] = useState({  
    pickupCords:{
      latitude:12.9716,
      longitude:77.5946,
      
    }, 
    dropOffCords:{
      latitude:12.2958,
      longitude:76.6394,
    },
  })
  const mapRef=useRef()

  const {pickupCords,dropOffCords} = state
  return(
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill}
      ref={mapRef}
    initialRegion={pickupCords}
    >
    <Marker
    coordinate={pickupCords}/>
    <Marker
    coordinate={dropOffCords}/>
    <  MapViewDirections
    origin={pickupCords}
    destination={dropOffCords}
    apikey={GOOGLE_MAPS_APIKEY}
    strokewidth={3}
    strokecolor="blue"
    optimizeWaypoints={true}
    onready={result =>{
      mapRef.current.fitToCoordinates(result.coordinates,{
        edgePadding:{
        top:40,
        right:50,
        bottom:50,
        left:50}
      
      })
    }}
     />
     </MapView>
    </View>
  );
};





const styles = StyleSheet.create({
 container:{
  backgroundColor:"#FFE8C6",
  flex:1,
 }
 }
  );

export default App;