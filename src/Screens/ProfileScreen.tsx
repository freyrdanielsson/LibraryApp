import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

interface Props {}
export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Todo, make stack navigation</Text>
        <Text style={styles.instructions}>This is ProfileScreen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 36,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});