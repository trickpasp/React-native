import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo } from '../actions';


const TodoList = ({ todos, dispatchToggleTodo }) => (
    <View>
        {todos.map(todo => {
            const { id } = todo;
            return(      
                <TodoListItem 
                    key={id} 
                    todo={todo}
                    onPressTodo={() => dispatchToggleTodo(id)}
                />
        )}) }
    </View>
);

// const styles = StyleSheet.create({

// });

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps, 
    { dispatchToggleTodo: toggleTodo }
)(TodoList);