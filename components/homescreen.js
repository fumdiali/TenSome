import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = { title: 'TenSome', };

    OpenProfileActivity = () => {
        this.props.navigation.navigate('User');
    }

    /* showAlert = () => {
        Alert.alert(
            "Want to use Google login?"
        )
    } */

    render(){
        

        return(
            <View style={styles.container}>
            
              <Image
                 source = {require('../tensomelogo.png')} 
                 style={styles.BorderClass}/>

              <Text style={styles.welcome}>
                Welcome to tensome
              </Text>

              <Button 
                 style={styles.login} 
                 title="Go to your profile"
                 onPress={this.OpenProfileActivity}
                 />
        
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        color: '#00f',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
      },
      BorderClass: {
          backgroundColor: "#fff",
          width: 150,
          height: 150,
          borderWidth: 5,
          borderColor: '#00f',
          borderRadius: 45
      },
      login: {
          backgroundColor: '#00f',
          width: 100,
          color: '#fff',
          borderRadius: 25
      }
});