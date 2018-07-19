import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import PeopleListItem from './PeopleListItem'
import styles from './styles';

const PeopleList = props => {

    const { peoples, onPressItem } = props;
    
    const items = peoples.map(people => <PeopleListItem 
                    key={ people.login.uuid } 
                    people={ people }
                    navigatioToPeopleDetail={onPressItem}
                />
    );

    return (
        <FlatList 
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem
                    people={ item }
                    navigatioToPeopleDetail={onPressItem}
                />
            )} 
            keyExtractor={item => item.login.uuid}
            />
    );    
}

export default PeopleList;