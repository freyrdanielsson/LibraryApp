import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View,
    Platform, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


// TODO: Import components

import UserContextProvider, { UserContext } from '../context/UserContext';

interface Props {
    navigation: any
}

export default function LoginScreen(props: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Notice it does not return anything. It takes a parameter
    // loginUser which will be sent from the rendered jsx component
    // that function will be the one gotten from the context provider
    // which in return just updates the context parameters.
    const onSubmit = (loginUser: any) => async (e: any) => {
            e.preventDefault();

            loginUser(username, password);
    }


    // target vs currentTarget?
    function onUsernameChange(value: string): void {
        setUsername(value);
    }

    function onPasswordChange(value: string): void {
        setPassword(value);
    }

    return(
        <UserContextProvider navigate={props.navigation.navigate}>
            <UserContext.Consumer>
                {({fetching, user, loginUser, message}) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.inputContainer}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} size={28} style={styles.inputIcon}/>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'Username'}
                                    onChangeText={onUsernameChange}/>
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'} size={28} style={styles.inputIcon}/>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'Password'}
                                    secureTextEntry={true}
                                    onChangeText={onPasswordChange}/>
                            </View>
                            <TouchableOpacity style={styles.loginButton} onPress={onSubmit(loginUser)}>
                                <Text>Login Button</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            </UserContext.Consumer>
        </UserContextProvider>
        
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
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 20,
    }
  });