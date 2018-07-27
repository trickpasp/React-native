import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        height: Dimensions.get('window').width/2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
    },
    text: {
        padding: 10,
    },
});