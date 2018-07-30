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
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: 0.8,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        
        alignItems: 'center',
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
});