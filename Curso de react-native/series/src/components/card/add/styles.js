import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width/2,       
    },
    card: {
        flex: 1,
        borderWidth: 1,
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
});