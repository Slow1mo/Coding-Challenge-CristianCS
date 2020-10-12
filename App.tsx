import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showUserLocation={true}
        region={{
          latitude: 55.6761, 
          longitude: 12.5683,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421   
      }}>
        
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: '100%',
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
