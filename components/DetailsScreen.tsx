import React from "react"
import { Text, View, StyleSheet} from "react-native"
import MapScreen from './MapScreen'

const DetailsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      
      
    </View>
  );
}
//tried to get the image by <View><img alt='Places' src={props.Image} /> </View> but was causing an error...

export default DetailsScreen;