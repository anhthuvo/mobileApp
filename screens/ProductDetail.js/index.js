import React, { useState } from 'react';
import { View, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import commonStyle from '../../assets/commonStyle';
import { GradientBtn, PrimaryBtn, ShadowBtn, style as styleBtn } from '../../components/Button';
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
                <LinearGradient
                    locations={[0, 0.2, 0.7, 0.8, 1]}
                    colors={color.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.5, y: 0.7 }}
                >
                    <View style={[{ backgroundColor: color['primary-0.5'] }]}>
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
                            <View style={[style.sizes]} horizontal={true} showsHorizontalScrollIndicator={false}>
                                {[36, 37, 38, 39].map(e => (
                                    <ShadowBtn key={e} passedStyle={[styleBtn.sm, { marginLeft: 10 }]} active={e === 36}>
                                        {e}
                                    </ShadowBtn>
                                ))}
                            </View>

                            <Text style={[style.detail]}>Dành thời gian ở ngoài trời chính là một cách để kết nối lại với bản thân, với mọi người và với Trái Đất. Hợp tác cùng Sean Wotherspoon, adidas thiết kế nên đôi giày này nhằm tôn vinh tất cả những gì hành tinh này mang đến cho chúng ta. Chất liệu tái chế và thiết kế vegan tuyệt đối thể hiện tình yêu Trái Đất. Chiếc túi vải nhung tăm gắn trên dây giày cho bạn thêm chỗ đựng đồ, có thể tháo rời và đeo theo nhiều kiểu khác nhau nhờ quai ẩn bên trong.

Sản phẩm này có sử dụng chất liệu tái chế, là một phần quyết tâm của chúng tôi hướng tới chấm dứt rác thải nhựa. Giày cũng sử dụng chất liệu vegan thay cho thành phần hoặc chất liệu có nguồn gốc từ động vật.</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
            <View style={[style.footer, commonStyle.container]}>
                <Text style={[style.price]}>$200</Text>
                <GradientBtn>Add to cart</GradientBtn>
            </View>
        </View>
    )
}
