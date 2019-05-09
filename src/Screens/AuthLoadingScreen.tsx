import AsyncStorage from '@react-native-community/async-storage';
import React, {Component, useEffect} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

interface State {}
interface Props { navigation: any }

export default function AuthLoadingScreen(props: Props) {
    
    
    // Fetch the token from storage then navigate to our appropriate place
    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('@user');
            console.log( 'token',token);
            
            props.navigation.navigate(token ? 'App' : 'Auth');
            await AsyncStorage.removeItem('@user');
        };
        getToken();
    });
    

    // Render any loading content that you like here
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })