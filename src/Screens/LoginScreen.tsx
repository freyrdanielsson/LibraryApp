import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';


// TODO: Import components

import { UserContext } from '../context/UserContext';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Notice it does not return anything. It takes a parameter
    // loginUser which will be sent from the rendered jsx component
    // that function will be the one gotten from the context provider
    // which in return just updates the context parameters.
    const onSubmit = (loginUser: (username: string, password: string) => void) => 
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            loginUser(username, password);
    }

    function onUsernameChange(e: any): void {
        const { target: { value = '' } = {} } = e;
        setUsername(value);
    }

    function onPasswordChange(e: any): void {
        const { target: { value = '' } = {} } = e;
        setPassword(value);
    }

    return(
        <UserContext.Consumer>
            {({fetching, user, loginUser, message}) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.welcome}>Todo, import components</Text>
                        <Text style={styles.instructions}>This is LoginScreen</Text>
                     </View>
                )
            }}
        </UserContext.Consumer>
    )
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