import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChangeText, value }) => (
	<TextInput
		style={styles.input}
		onChangeText={onChangeText}
		value={value} />
);

const styles = StyleSheet.create({
	input: {	
		paddingLeft: 5,
	}
});

export default Input;
