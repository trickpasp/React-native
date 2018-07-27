import React from 'react';
import { 
    View, 
    Text,
    Image 
} from 'react-native';
import styles from './styles';

const SerieCard = ({ serie }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}
                resizeMode="stretch"
            />
            <Text style={styles.text}>{`${serie.id} - ${serie.title}`}</Text>
        </View>        
    </View>
);

export default SerieCard;