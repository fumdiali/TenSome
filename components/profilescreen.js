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

export default class ProfileScreen extends Component {

    static navigationOptions = { title: 'Profile', };
    
    showAlert = () => {
        Alert.alert(
            "Yaaay! You're INTERESTED!"
        )
    }

    render(){
        

        return(
            <View style={styles.container}>
               <Image 
                  source={require('../smileclosed.png')} 
                  style={styles.profileImage}/>
                <Text style={styles.profileName}>
                    Femi Otedola
                </Text>  
                <Text style={styles.profileBio}>
                    He is a fine man, with plenty of money. 
                    He can be a good sugar-daddy to you.
                    Click the button, if you want to meet.
                </Text>
                <Button 
                   style={styles.meetButton} 
                   title='INTERESTED'
                   onPress={this.showAlert}
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
      profileImage: {
          width: 250,
          height: 250,
      },
      profileName: {
          textAlign: 'center',
          fontSize: 45,
          fontWeight: 'bold',
          color: '#0f0'
      },
      profileBio: {
          textAlign: 'center',
          fontSize: 25,
          color: '#f00'
      },
      meetButton: {
          backgroundColor: '#00f',
          color: '#fff',
          width: 100
      }
});