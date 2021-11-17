import React, { useState } from 'react';
import { View, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import commonStyle from '../../assets/commonStyle';
import { GradientBtn, PrimaryBtn, style as styleBtn } from '../../components/Button';
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { breakpoint, color } from '../../assets/theme';

const Categories = [
    "Nike", "Addidas", 'Jodarrd', 'abdks'
]

const products = [
    {
        name: 'Nike Air Max 95 dfdf',
        price: 200,
        path: '/',
        image: 'https://i.dlpng.com/static/png/1249875-air-jordan-5-rainbow-orange-white-sneaker-png-1000_600_preview.png'
    },
    {
        name: 'Nike Air Max 95 dfdf',
        price: 200,
        path: '/',
        image: 'https://i.dlpng.com/static/png/1676804-air-jordan-1-top-sneaker-png-1000_600_preview.png'
    },
    {
        name: 'Nike Air Max 95 dfdf',
        price: 200,
        path: '/',
        image: 'https://www.pngall.com/wp-content/uploads/2016/06/Adidas-Shoes-PNG-Image.png'
    },
    {
        name: 'Nike Air Max 95 dfdf',
        price: 200,
        path: '/',
        image: 'https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-HD-Image.png'
    },
]

export default function ProductDetail() {
    const { width: winWidth } = useWindowDimensions();
    const isMobile = winWidth < breakpoint.sm;

    return (
        <View style={[{ flex: 1 }]}>
            <ScrollView style={[style.background]} showsVerticalScrollIndicator={false}>
                <View style={[{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: color.white }]}>
                    <TouchableOpacity
                        title="Back to product list"
                        onPress={() => console.log(2222)}
                    >
                        <View style={[style.backBtn]}>
                            <Image
                                style={[{ width: 20, height: 20 }]}
                                source={require('../../assets/icons/white-prev-arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <Image
                        style={[style.image]}
                        source={require('../../assets/images/banner5.png')}
                    />
                    <View style={[{ alignItems: 'center' }]}>
                        <View style={{ borderColor: color['blue-400'], borderWidth: 2, width: 30, height: 30, borderRadius: 15, transform: [{ scaleX: 10 }], marginBottom: 50 }}></View>
                    </View>
                </View>
                <View style={[commonStyle.container, { marginBottom: 100 }]}>
                    <Text style={[style.name]}>Jordeans 2023 max</Text>
                    <Text style={[style.desc]}>Men running shoes</Text>
                    <Text style={[style.subtitle]}>Size</Text>
                    <View style={[{ height: 70 }]}>
                        <ScrollView style={[style.sizes]} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {[36, 37, 38, 39].map(e => (
                                <PrimaryBtn key={e} passedStyle={[styleBtn.sm, { marginLeft: 10 }]} active={e === 36}>
                                    {e}
                                </PrimaryBtn>
                            ))}
                        </ScrollView>
                    </View>

                    <Text style={[style.detail]}>abdkks slkdfkv lkdsfsf sldjfs lsfes lsdfsj sd fsf</Text>
                </View>
            </ScrollView>
            <View style={[style.footer, commonStyle.container]}>
                <Text style={[style.price]}>$200</Text>
                <GradientBtn>Add to cart</GradientBtn>
            </View>
        </View>
    )
}
