import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { capitalizerFirstLetter } from '../../util';


const PeopleListItem = props => {
    const { people, navigatioToPeopleDetail } = props;
    const { title ,first, last } = people.name;
    const { thumbnail } = people.picture;
    return( 
        <TouchableOpacity onPress={() => {
            console.log('Clicou em mim!!!', first);
            navigatioToPeopleDetail({ people });
        }}>       
            <View style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: thumbnail }} />
                    <Text  style={styles.lineText}>
                        { `${ capitalizerFirstLetter(title) } ${ capitalizerFirstLetter(first) } ${ capitalizerFirstLetter(last) }` }


                    </Text>
            </View>
        </TouchableOpacity>
    );
}

export default PeopleListItem;