import { StyleSheet } from "react-native";
import { breakpoint, color, fontSize, fontWeight } from '../../assets/theme';
import { Dimensions } from 'react-native';
const { width: winWidth } = Dimensions.get('window');
const isMobile = winWidth < breakpoint.sm;
const isTablet = winWidth < breakpoint.md;

export default StyleSheet.create({
    background: {
        backgroundColor: color['blue-300'],
        height: "100%",
    },
    overlay: {
        backgroundColor: color['white-0.2'],
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: color['primary-0.5'],
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    backText: {
        color: color.white,
        fontWeight: fontWeight.bold,
        fontSize: fontSize.h2,
        fontStyle: 'italic',
        position: 'absolute',
        left: '50%',
        top: 0,
        width: 320,
        transform: [{ translateX: -145 }],
        // backgroundColor: 'blue',
        textAlign: 'center',
        height: '100%',
        textAlignVertical: 'center'
    },
    name: {
        fontSize: fontSize.h2,
        color: color['primary'],
        fontWeight: fontWeight.bold,
        flex: 1,
        marginBottom: 5,
        marginTop: 20,
    },
    price: {
        fontSize: fontSize.h2,
        color: color['primary'],
        fontWeight: fontWeight.bold,
    },
    desc: {
        fontSize: fontSize.h4,
        color: color['gray-300'],
        letterSpacing: 0.5
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        transform: [{rotate: '-20deg'}]
    },
    sizes: {
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: color['blue-400'],
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        width: '100%'
    },
    subtitle: {
        fontWeight: fontWeight.bold,
        fontSize: fontSize.h3,
        color: color['blue-900'],
        marginTop: 20,
        marginBottom: 10
    },
    footer: {
        position: 'absolute',
        width: '100%',
        backgroundColor: color['white'],
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
    },
    detail: {
        color: color['blue-900'],
        lineHeight: 25,
        letterSpacing: 0,
        marginTop: 20,
    },
    sideNavigator: {
        borderColor: color['blue-900'],
        borderWidth: 0.5,
        width: 30, height: 30,
        borderRadius: 15,
        transform: [{ scaleX: 9 }], marginBottom: 50,
    }
})