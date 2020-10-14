import React from "react"
import { Text, View} from "react-native"
import MapScreen from './MapScreen'

const DetailsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <View><img src={props.Image} alt="Test" /> </View>
      
    </View>
  );
}

export default DetailsScreen;