import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({    
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#72877a',   
        borderRadius: 5,     
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
    },
    label: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold',
        flex: 1.2,
    },
    content: {
        flex: 3,
    },
    longLabel: {
        fontSize: 12,
    }, 
});

export default styles;