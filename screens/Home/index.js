import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, useWindowDimensions } from 'react-native';
import Slider from '@react-native-community/slider';
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

export default function Home() {
    const { width: winWidth } = useWindowDimensions();
    const isMobile = winWidth < breakpoint.sm;
    const [price, setprice] = useState(20);

    return (
        <ScrollView style={[style.background, commonStyle.container]} showsVerticalScrollIndicator={false}>
            <View style={[style.searchWrapper]}>
                <TextInput style={[style.search]} placeholder={"Find something ??"} />
                <Image
                    style={[style.searchIcon]}
                    source={require('../../assets/icons/gray-search.png')}
                />
            </View>

            <LinearGradient
                locations={[0, 1]}
                colors={[color.white, color['gray-200']]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[style.banner, { height: winWidth / 2 }]}
            >
                <Text style={[style.bannerContent]}>Nike Sb Zoom Dunk</Text>
                <GradientBtn passedStyle={[isMobile && styleBtn.sm, { marginTop: 10 }]}>Explore</GradientBtn>

                <Image
                    style={[style.bannerImg]}
                    source={require('../../assets/images/banner.png')}
                />
            </LinearGradient>

            <Text style={style.title}>Category</Text>
            <View style={[{ height: 70, position: 'relative' }]}>
                <Image
                    style={[style.categoryArrow]}
                    source={require('../../assets/icons/gray-arrow.png')}
                />
                <ScrollView style={[style.category]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {Categories.map(e => (
                        <PrimaryBtn key={e} passedStyle={[styleBtn.sm, { marginLeft: 10 }]}>
                            {e}
                        </PrimaryBtn>
                    ))}
                </ScrollView>
            </View>

            <View style={[{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                <Text style={style.title}>Price</Text>
                <Text style={{ color: color['blue-600']}}>Up to ${price}</Text>
            </View>
            <Slider
                style={{ width: '100%', marginBottom: 20 }}
                minimumValue={20}
                maximumValue={500}
                minimumTrackTintColor={color['blue-600']}
                maximumTrackTintColor={color['blue-500']}
                thumbImage={require('../../assets/icons/pink-circle.png')}
                onValueChange={(value) => setprice(value)}
                step={10}
            />

            <LinearGradient
                locations={[0, 0.2, 0.7, 0.8, 1]}
                colors={color.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.7 }}
                style={[{ marginVertical: 20, borderRadius: 10 }]}
            >
                <View style={[style.productList]}>
                    {products.map((p, i) => {
                        let isSolid = (i % 4 === 3 || i % 4 === 0) && isMobile;
                        return (
                            <View style={[style.itemBounder, { marginTop: (i % 2) || !isMobile ? 60 : 20 }]} key={i}>
                                <LinearGradient
                                    locations={[0.4, 1]}
                                    colors={isSolid ? [color.white, color['gray-200']] : ['transparent', 'transparent']}
                                    start={{ x: -0.5, y: 0 }}
                                    end={{ x: 1, y: 0.5 }}
                                    style={[style.productWrapper]}
                                >
                                    <Image
                                        style={[style.productImage]}
                                        source={{ uri: p.image }}
                                    />
                                    <View style={[style.productContent]}>
                                        <Text style={[style.productName, { color: isSolid ? color['blue-900'] : color.white }]}>{p.name}</Text>
                                        <Text style={[style.productPrice]}>${p.price}</Text>
                                    </View>
                                </LinearGradient>
                            </View>
                        )
                    })}
                </View>
            </LinearGradient>
        </ScrollView>
    )
}
