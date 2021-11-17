import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'
import { color } from '../assets/theme'
import { LinearGradient } from 'expo-linear-gradient';

export default function NavigationBar() {
    return (
        <View style={style.nav}>
            <View style={style.curve}></View>
            <Image
                style={[style.icon, style.cartIcon]}
                source={require('../assets/icons/white-cart.png')}
            />
            <TouchableOpacity
                title="Press me"
                onPress={() => console.log(2222)}
            >
                <LinearGradient
                    locations={[0, 0.2, 0.5, 0.8, 1]}
                    colors={color.gradient}
                    start={{ x: -0.3, y: 0.1 }}
                    style={style.circleBtn}>
                    <View style={style.overlay}>
                        <Image
                            style={[style.icon]}
                            source={require('../assets/icons/white-home.png')}
                        />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <Image
                style={[style.icon, style.cartIcon]}
                source={require('../assets/icons/white-user.png')}
            />
        </View>
    )
}

const style = StyleSheet.create({
    nav: {
        backgroundColor: color.primary,
        height: 80,
        width: "100%",
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    circleBtn: {
        height: 60,
        width: 60,
        borderRadius: 60,
        top: -5,
        opacity: 0.9
    },
    overlay: {
        backgroundColor: color["white-0.5"],
        height: 60,
        width: 60,
        borderRadius: 60,
        position: "absolute",
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    cartIcon: {
        opacity: 0.5,
    },
    curve: {
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: color.primary,
        position: 'absolute',
        top: -18,
        left: '50%',
        transform: [{ 'translateX': -100 }]
    }
})