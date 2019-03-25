import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

const AddSerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.container, 
            isFirstColumn ? styles.firstColumn: styles.lastColumn
        ]}
    >
        <View style={styles.card}>
            <View style={styles.cardItem}>
                <Feather name="plus" size={125} color="#6ca2f7"/>
            </View>            
        </View>        
    </TouchableOpacity>
);

export default AddSerieCard;