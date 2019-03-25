import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput,
    Picker
} from 'react-native';

import { connect } from 'react-redux';

import FormRow from '../../../components/form/FormRow';
import { setField } from '../../../actions'

const SerieFormPage = ({ serieForm, setField }) => (
    <View>
        <FormRow first>
            <TextInput 
                style={styles.input}
                placeholder="Título"
                value={serieForm.title}
                onChangeText={value => setField('title', value)}
            />
        </FormRow>
        <FormRow>
            <TextInput 
                style={styles.input}
                placeholder="URL da imagem"
                value={serieForm.img}
                onChangeText={value => setField('img', value)}
                />
        </FormRow>

        <FormRow>
            <Picker
                selectedValue={serieForm.gender}
                onValueChange={itemValue => setField('gender', itemValue)}>
                <Picker.Item label="Policial" value="police" />
                <Picker.Item label="Comédia" value="comedy" />
                <Picker.Item label="Terror" value="horror" />
            </Picker>
        </FormRow>
    </View>
);

const styles = StyleSheet.create({
    input: {
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
});

const mapStateToProps = state => ({
    serieForm: state.serieForm
});

const mapDispatchToProps = {
    setField
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);
