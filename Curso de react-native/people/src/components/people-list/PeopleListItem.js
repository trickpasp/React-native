import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { capitalizerFirstLetter } from '../../util';


const PeopleListItem = props => {
    const { people, navigatioToPeopleDetail } = props;
    const { title ,first, last } = people.name;    
    return( 
        <TouchableOpacity onPress={() => {
            navigatioToPeopleDetail({ people });
        }}>       
            <View style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                    <Text  style={styles.lineText}>
                        {  
                           `${ 
                                capitalizerFirstLetter(title) 
                            } 
                            ${ 
                                capitalizerFirstLetter(first) 
                            } 
                            ${ 
                                capitalizerFirstLetter(last) 
                            }` 
                        }


                    </Text>
            </View>
        </TouchableOpacity>
    );
}

export default PeopleListItem;