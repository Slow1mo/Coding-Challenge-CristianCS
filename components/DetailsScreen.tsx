import React from "react"
import { Text, View, Image} from "react-native"
import MapScreen from './MapScreen'

const DetailsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TITLE: {props.title}</Text>
      <Text>DESCRIPTION: {props.description}</Text>
      <Image width="100%" height="200" source={{uri:props.Image}} /> 
    </View>
  );
}
//tried to get the image by <View><img alt='Places' src={props.Image} /> </View> but was causing an error...

export default DetailsScreen;