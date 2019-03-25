import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TextInput,
    Picker,
    Slider,
    Button,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import { connect } from 'react-redux';

import FormRow from '../../../components/form/FormRow';
import { setField } from '../../../actions'

const SerieFormPage = ({ serieForm, setField }) => (
    <KeyboardAvoidingView 
        keyboardVerticalOffset={300}
        behavior="padding" 
        enabled
    >
        <ScrollView>
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

            <FormRow>
                <View style={styles.sameRow}>
                    <Text>Nota:</Text>
                    <Text>{serieForm.rate}</Text>
                </View>
                <Slider 
                    value={serieForm.rate}
                    onValueChange={value => setField('rate', value)}
                    minimumValue={0}
                    maximumValue={100}
                    step={5}
                /> 
            </FormRow>

            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição"
                    value={serieForm.description}
                    onChangeText={value => setField('description', value)}
                    numberOfLines={4}
                    multiline={true}
                    />
            </FormRow>

            <Button 
                title="Salvar"
                onPress={() => console.log(serieForm)}
            />
        </ScrollView>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    input: {
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10.
    }
});

const mapStateToProps = state => ({
    serieForm: state.serieForm
});

const mapDispatchToProps = {
    setField
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);
