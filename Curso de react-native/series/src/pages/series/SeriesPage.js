import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import SerieCard from '../../components/card/SerieCard';
import series from '../../../series.json'
import AddSerieCard from '../../components/card/AddSerieCard';

const isEven = number => number % 2 === 0;

const SeriesPage = props => (
    <View>
        <FlatList 
            data={[...series, { isLast: true }]}
            renderItem={({ item, index }) => (
                item.isLast
                    ?<AddSerieCard 
                        isFirstColumn={isEven(index)}
                        onPress={() => props.navigation.navigate('SerieForm', )}
                     />
                    :<SerieCard 
                        serie={item}
                        isFirstColumn={isEven(index)}
                        onNavigate={() => props.navigation.navigate('SerieDetail', { serie: item })}
                     />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            ListHeaderComponent={props => (<View style={styles.marginTop}></View>)}
            ListFooterComponent={props => (<View style={styles.marginBotton}></View>)}
        />
    </View> 
);

export default SeriesPage;