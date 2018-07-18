import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e2f9ff',
    },
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        borderRadius: 50,
        marginLeft: 15,        
    },
});

export default styles;