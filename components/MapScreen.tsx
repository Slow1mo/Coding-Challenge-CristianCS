
import React, { useState} from "react"
import * as reactNative from "react-native"
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import data from './mockData/mockData.tsx'

const { width, height } = reactNative.Dimensions.get('window');

interface Places {
    id: number
    title: string
    imageUrl: string
    latitude: number
    longitude: number
    description: string
}
const ScreenStack = createStackNavigator();

export default function MapScreen({ navigation }) {
    const [places, setPlaces] = useState(data);

    if(places) {
        return (
            
                <reactNative.View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 55.6761,
                            longitude: 12.5683,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={styles.map}>
                        
                        {places.map((marker: Places) => {

                            return <Marker
                                key={marker.id}
                                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                title={marker.title}
                                description={marker.description}

                            >
                            </Marker>
                        })}
                    </MapView>
                </reactNative.View>
            
        )
    } else {
        return (<reactNative.View><reactNative.Text>Loading Data.......</reactNative.Text></reactNative.View>)
    }
}


const styles = reactNative.StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
