import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail.js';
import WithNavbar from './Template/WithNavbar';

export default function App() {

  return (
    <View style={{
      paddingTop: StatusBar.currentHeight,
      height: "100%"
    }}>
      {/* <WithNavbar> */}
        {/* <Home /> */}
      {/* </WithNavbar> */}
      <ProductDetail />
    </View>
  );
}

