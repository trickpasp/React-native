import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';


const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => (
    <View style={styles.containerLine}>
        {todos.map(todo => {
            const { id } = todo;
            return(      
                <TodoListItem 
                    key={id} 
                    todo={todo}
                    onPressTodo={() => dispatchToggleTodo(id)}
                    onLongPressTodo={() => dispatchSetEditingTodo(todo)}
                />
        )}) }
    </View>
);

const styles = StyleSheet.create({
    containerLine: {
        paddingLeft: 20,
        paddingRight: 20,
    },
});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps, 
    { 
        dispatchToggleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo
    }
)(TodoList);