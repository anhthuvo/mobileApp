import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail.js';
import WithNavbar from './Template/WithNavbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <View style={{
      paddingTop: StatusBar.currentHeight,
      height: "100%"
    }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

