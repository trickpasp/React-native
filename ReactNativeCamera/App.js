/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { RNCamera } from "react-native-camera";

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data1: './src/img/1_titulo.png'
    }
  }

  takePicture = async () => {
    if(this.camera){
      const options = { quality: 0.8, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        data1: data.base64
      });
      
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.front}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camerra phone'}
        />       
        
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Image
              style={styles.buttonImg}
              source={ require('./src/img/1_titulo.png')}
            />
            
          </TouchableOpacity>

          <Imagem data={this.state.data1}/>
        </View>
      </View>
    );
  }
  
}

const Imagem = (props) => (
  <View style={styles.mostrar}>    
    <Image style={styles.buttonImg} source={{uri: `data:image/gif;base64,${props.data}`}} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#272526',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  mostrar: {
    flex: 0,
    backgroundColor: 'yellow',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    //alignSelf: 'center',
    margin: 20,
  },

  capture: {
    flex: 0,
    backgroundColor: 'yellow',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    margin: 20,
  },

  buttonImg: {
    width: 50,
    height:50,
  },
 
});
