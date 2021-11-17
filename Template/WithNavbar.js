import React from 'react'
import { View } from 'react-native'
import NavigationBar from '../components/NavigationBar'

export default function WithNavbar({children}) {
    return (
        <View style={{ flex: 1, width: "100%"}}>
            <View style={{ flex: 1, width: "100%", backgroundColor: "blue"}}>
                {children}
            </View>
            <NavigationBar />
        </View>
    )
}
