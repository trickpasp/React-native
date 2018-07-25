import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const TodoListItem = ({ todo, onPressTodo }) => ( 
    <TouchableOpacity onPress={() => {onPressTodo()}}>       
        <View style={styles.line}>
                <Text  style={styles.lineText}>
                    { todo.text }
                </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
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
});

export default TodoListItem;