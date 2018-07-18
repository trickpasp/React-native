import React from 'react';
import { View, Text } from 'react-native';

import PeopleListItem from './PeopleListItem'
import styles from './styles';

const PeopleList = props => {

    const { peoples } = props;
    
    const items = peoples.map(people => <PeopleListItem 
                    key={ people.login.uuid } 
                    people={ people }
                />
    );

    return (
        <View style={styles.container}>
            { items }
        </View>
    );    
}

export default PeopleList;