import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

interface Props {}
export default function HomeScreen(props: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Todo, make stack navigation</Text>
      <Text style={styles.instructions}>This is HomeScreen</Text>
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