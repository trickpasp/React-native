import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const TodoListItem = ({ 
    todo, 
    onPressTodo,
    onLongPressTodo 
}) => ( 
    <TouchableOpacity 
        onPress={onPressTodo}
        onLongPress={onLongPressTodo}>       
        <View style={styles.line}>
                <Text  style={[
                        styles.lineText, 
                        todo.done ? styles.lineThrough : null
                ]}>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    lineThrough: {
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    }
});

export default TodoListItem;