import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { color, fontSize, fontWeight } from '../assets/theme'
import { LinearGradient } from 'expo-linear-gradient';

export function GradientBtn({ children, passedStyle }) {
    return (
        <LinearGradient
            locations={[0, 0.5, 1]}
            colors={color.gradientBtn}
            start={{ x: -0.1, y: 0 }}
            end={{ x: 1, y: 2 }}
            style={[style.button, passedStyle ]}
            >
            <Text style={{color: color.white, fontWeight: fontWeight.bold, fontSize: fontSize.h4}}>{children}</Text>
        </LinearGradient>
    )
}

export function PrimaryBtn ({ children, passedStyle, active }) {
    return (
        <View style={[style.button, { backgroundColor: active? color.primary : color['gray-100']}, ...passedStyle]}>
            <Text style={{color: active? color.white : color.primary, fontWeight: fontWeight.bold, fontSize: fontSize.h4 }}>{children}</Text>
        </View>
    )
}

export function ShadowBtn ({ children, passedStyle, active }) {
    return (
        <View style={[style.button, { backgroundColor: active? color['primary'] : color['white-0.5']}, ...passedStyle]}>
            <Text style={{color: active? color.white : color.primary, fontWeight: fontWeight.bold, fontSize: fontSize.h4 }}>{children}</Text>
        </View>
    )
}

export const style = StyleSheet.create({
    button: {
        borderRadius: 10,
        height: 50,
        alignSelf: 'flex-start',
        paddingLeft: 40,
        paddingRight: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: color.white,
        position: 'relative',
    },
    overlay: {
        backgroundColor: color["white-0.2"],
        height: '100%',
        width: '100%',
        borderRadius: 10,
        position: "absolute",
        top: 0,
    },
    sm: {
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
    }
})