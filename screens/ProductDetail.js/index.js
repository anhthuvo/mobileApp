import React, { useState } from 'react';
import { View, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import commonStyle from '../../assets/commonStyle';
import { GradientBtn, PrimaryBtn, ShadowBtn, style as styleBtn } from '../../components/Button';
import style from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { breakpoint, color } from '../../assets/theme';


export default function ProductDetail({ route, navigation }) {
    const { width: winWidth } = useWindowDimensions();
    const isMobile = winWidth < breakpoint.sm;
    const { detail } = route.params;
    const [Size, setSize] = useState(detail.sizes[0]);

    return (
        <View style={[{ flex: 1 }]}>
            <ScrollView style={[style.background]} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={[{ backgroundColor: color['third'] }]}>
                        <TouchableOpacity
                            title="Back to product list"
                            onPress={() => navigation.goBack()}
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
                            source={require('../../assets/images/banner4.png')}
                        />
                    </View>


                    <View style={[commonStyle.container, { zIndex: 2, position: 'relative', backgroundColor: 'blue' }]}>
                        <View style={[style.curve]}></View>
                        <View style={[style.circle]}></View>

                        <View style={[style.sizes]} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {detail.sizes.map(e => (
                                <TouchableOpacity
                                    key={e}
                                    title="Select size"
                                    onPress={() => setSize(e)}
                                >
                                    <ShadowBtn passedStyle={[styleBtn.sm, { marginLeft: 10 }]} active={e === Size}>
                                        {e}
                                    </ShadowBtn>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Text style={[style.name]}>{detail.name}</Text>
                        <Text style={[style.desc]}>{detail.description}</Text>
                        <Text style={[style.subtitle]}>Size</Text>


                        <Text style={[style.detail]}>{detail.detail}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={[style.footer, commonStyle.container]}>
                <Text style={[style.price]}>$200</Text>
                <GradientBtn>Add to cart</GradientBtn>
            </View>
        </View>
    )
}
