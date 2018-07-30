import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import Line from '../../../components/card/line/line';
import LongText from '../../../components/card/line/longText';

class SerieDetailPage extends React.Component {
    
    render() {
        const { serie } = this.props.navigation.state.params;
        return (
            <ScrollView>
                <Image 
                    source={{ uri: serie.img }}
                    aspectRatio={1}
                />
                <Line label={'Título'} content={serie.title}/>
                <Line label={'Gênero'} content={serie.gender}/>
                <Line label={'Nota'} content={serie.rate}/>
                <LongText label={'Descrição'} content={serie.description}/>
            </ScrollView>
        );
    }
}

export default SerieDetailPage;