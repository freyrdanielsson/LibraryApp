import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


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


    // target vs currentTarget?
    function onUsernameChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { currentTarget: { value = '' } = {} } = e;
        setUsername(value);
    }

    function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { currentTarget: { value = '' } = {} } = e;
        setPassword(value);
    }

    return(
        <UserContext.Consumer>
            {({fetching, user, loginUser, message}) => {
                return (
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <Icon name={'ios-person'} size={28} style={styles.inputIcon}/>
                            <TextInput 
                                style={styles.input} 
                                placeholder={'Username'}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name={'ios-lock'} size={28} style={styles.inputIcon}/>
                            <TextInput 
                                style={styles.input} 
                                placeholder={'Password'}
                                secureTextEntry={true}/>
                        </View>
                    </View>
                )
            }}
        </UserContext.Consumer>
    )
}


const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        fontSize: 36,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        width: WIDTH - 55,
        borderRadius: 25,
        fontSize: 16,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 36,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
    },
    inputIcon: {
        position: 'absolute',
        left: 26,
        padding: 10,
    },
  });