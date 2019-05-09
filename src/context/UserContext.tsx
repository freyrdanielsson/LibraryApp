import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react'


// MOVE GET AND SET TO UTILS
const getUser = async () => {
    try {
        const oldUser = await AsyncStorage.getItem('@user');
        return oldUser;
    } catch(e){
        // read error
    }
};

const saveUser = async (newUser: any) => {
    try {
        if(newUser !== '') {
            await AsyncStorage.setItem('@user', newUser);
        } else {
            await AsyncStorage.removeItem('@user');
        }
    } catch(e) {
        // save error
    }
  }


// TODO: Make Interface for User
const user = getUser();

export const UserContext = React.createContext({
    fetching: false,
    authenticated: !!user, // avoid undefined
    user,
    message: [],
    loginUser: async (username: string, password: string) => {},
    logoutUser: async () => {},
});

// Maybe useless...
interface State {
    fetching: boolean,
    authenticated: boolean,
    message: string[],
    user: any,
}

interface Props {
    navigate?: any,
}

export default class UserContextProvider extends Component<Props, State> {
    state = {
        fetching: false,
        authenticated: !!user,
        message: [],
        user,
    }

    loginUser = async (username: string, password: string) => {
        console.log(username, password);
        await saveUser(username);
        this.props.navigate('AuthLoading');
    }

    logoutUser = async () => {
        await saveUser('');
        this.setState({ user: null, authenticated: false });
    }

    render() {
        const { children } = this.props;
        return (
            <UserContext.Provider value={{
                ...this.state,
                loginUser: this.loginUser,
                logoutUser: this.logoutUser,
            }}>
                {children}
            </UserContext.Provider>
        );
    }

}