import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width/2,
    },
    card: {
        flex: 1,
        backgroundColor: 'transparent',
        borderColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    cardItem: {
       backgroundColor: 'transparent',
       borderColor: '#6ca2f7',
       borderWidth: 7,
       borderRadius: 75,
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
});