import { StyleSheet } from "react-native";
import { breakpoint, color, fontSize, fontWeight } from '../../assets/theme';
import { Dimensions } from 'react-native';
const {width : winWidth} = Dimensions.get('window');
const isMobile = winWidth < breakpoint.sm;
const isTablet = winWidth < breakpoint.md;

export default StyleSheet.create({
    background: {
        backgroundColor: color['blue-300'],
        height: "100%",
    },
    title: {
        fontSize: fontSize.h3,
        color: color.primary,
        fontWeight: fontWeight.bold,
        marginBottom: 10,
        marginTop: 20
    },
    category: {
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: color.white,
        marginRight: 20,
    },
    searchWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: 40,
        marginTop: 20
    },
    search:{
        height: '100%',
        backgroundColor: color.white,
        borderRadius: 10,
        paddingLeft: 15,
        flex: 1
    },
    searchIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: color.primary,
        borderRadius: 10,
        // backgroundColor: 'red',
        alignItems: "center",
        justifyContent: 'center'
    },
    banner :{
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: isMobile? 20 : isTablet? 40 : 50
    },
    bannerImg: {
        height: '100%',
        width: '60%',
        resizeMode: 'contain',
        position: 'absolute', 
        bottom: -20, 
        right: 10, 
        transform: [{ rotate: '-20deg' }]
    },
    bannerContent: {
        fontSize: isMobile? fontSize.h2: fontSize.h0,
        color: color.primary,
        fontWeight: fontWeight.bold,
        width: '50%',
    },
    categoryArrow: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: 20,
        zIndex: 1,
        resizeMode: 'contain',
        backgroundColor: color.white
    },
    productList: {
        paddingVertical: 20,
        // paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        // backgroundColor: 'red'
    },
    itemBounder: {
        width: isMobile? '50%' : '33.33%',
        marginTop: 20,
        paddingHorizontal: isMobile? 10 : isTablet? 20 : 40
    },
    productWrapper: {
        width: '100%',
        paddingTop: '130%',
        borderRadius: 10,
        position: 'relative',
        backgroundColor: color['secondary'],
    },
    productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
        transform: [{ rotate: '-25deg'}, { translateY: -40}, { translateX: 10}],
        // backgroundColor: 'blue'
    },
    productContent: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: color.light,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    productName: {
        color: color['blue-900'],
        fontSize: fontSize.h4,
        textAlign: 'center',
        fontWeight: fontWeight.bold,
        textTransform: 'uppercase'
    },
    productPrice: {
        color: color['gray-300'],
        textAlign: 'center',
        fontSize: fontSize.h4,
        marginTop: 10
    }
})