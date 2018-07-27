import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import SerieCard from '../../components/card/SerieCard';
import series from '../../../series.json'

const SeriesPage = props => (
    <View>
        <FlatList 
            data={series}
            renderItem={({ item }) =>(
                <SerieCard 
                    serie={item}
                />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
        />
    </View> 
);

export default SeriesPage;