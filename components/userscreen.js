import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Geolocation,
  View
} from 'react-native';

export default class UserScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: 37.422,
          longitude: -122.35,
          error: null,
        };
      }

      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }

    static navigationOptions = { title: 'User' };

    GoToProfile = () => {
        this.props.navigation.navigate('Profile');
    }

    render(){
        return(
            <View style={styles.container}>

               <View style={styles.imgPos}>
                  <Image 
                     source={require('../bpd.jpg')} 
                     style={styles.BorderClass}/>    
                </View>    
                <Text style={styles.welcome}>Hello,FineBoi</Text>
           <View>
                <Text style={styles.lat}>Latitude: {this.state.latitude}</Text>
                <Text style={styles.long}>Longitude: {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View> 
                <Text style={styles.scrollLabel}>People nearby..</Text>
               <ScrollView horizontal={ true } style={styles.scrollers}>
                  <TouchableOpacity activeOpacity={ .5 } onPress={this.GoToProfile}>
                  <Image source={require('../smileclosed.png')} />
                  </TouchableOpacity>    
                  <Image source={require('../smileopen.png')} />
                  <Image source={require('../sadclosed.png')} />
                  <Image source={require('../sadopen.png')} />
                  <Image source={require('../xeyes.png')} />

                  <Image source={require('../smileclosed.png')} />
                  <Image source={require('../smileopen.png')} />
                  <Image source={require('../sadclosed.png')} />
                  <Image source={require('../sadopen.png')} />
                  <Image source={require('../xeyes.png')} />
               
               </ScrollView>
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
        color: '#0f0',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 7,
        position: 'absolute',
        top: 90,
        left: 0
      },
      BorderClass: {
        width: 70,
        height: 70,
        borderRadius: 65,
        borderColor: '#00f',
        borderWidth: 2
      },
      imgPos: {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 10
    },
    lat: {
        position: 'absolute',
        top: 150,
        right: 100,
        margin: 10,
        fontSize: 20,
        color: '#f00'
    },
    long: {
        top: 150,
        left: 100,
        margin: 10,
        fontSize: 20,
        color: '#f00'
    },
      scrollLabel: {
          flex: 1,
          marginTop: 180,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 41,
          color: '#00f'
      },
      scrollers: {
          margin: 50,
          
      }
});