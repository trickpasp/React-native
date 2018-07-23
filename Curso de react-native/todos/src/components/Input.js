import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({onChangeText, value}) => (
    <View>
        <TextInput 
            onChangeText={onChangeText}
            value={value}
            style={styles.input}
        />
    </View>
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingBottom: 10,
    },
});

export default Input;
