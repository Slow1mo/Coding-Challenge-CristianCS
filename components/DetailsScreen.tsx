import React from "react"
import { Text, View} from "react-native"


export default function DetailsScreen({title, description, Image}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text><h1>{title}</h1>
      <p>description</p></Text>
      <View><img src="Image" alt="Image" /> </View>
      
    </View>
  );
}