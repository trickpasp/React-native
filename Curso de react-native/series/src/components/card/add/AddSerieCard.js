import React from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

const AddSerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.container, 
            isFirstColumn ? styles.firstColumn: styles.lastColumn
        ]}
    >
        <View style={styles.card}>
            {/* <Image
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}
                resizeMode="cover"
            /> */}
            <View>
                <Text>Aqui vai nosso Botão</Text>
            </View>
        </View>        
    </TouchableOpacity>
);

export default AddSerieCard;