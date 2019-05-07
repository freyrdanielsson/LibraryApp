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

const setUser = async (newUser: any) => {
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

export const Context = React.createContext({
    fetching: false,
    authenticated: !!user, // avoid undefined
    user,
    message: [],
    loginUser: async (username: string, password: string) => {return},
    logoutUser: async () => {return},
});

// Maybe useless...
interface State {
    fetching: boolean,
    authenticated: boolean,
    message: string[],
    user: any,
}

interface Props {}

export default class UserContext extends Component<Props, State> {
    state = {
        fetching: false,
        authenticated: !!user,
        message: [],
        user,
    }

    loginUser = async (username: string, password: string) => {
        // Login the user..
    }

    logoutUser = async () => {
        await setUser('');
    }

    render() {
        const { children } = this.props;
        return (
            <Context.Provider value={{
                ...this.state,
                loginUser: this.loginUser,
                logoutUser: this.logoutUser,
            }}>
                {children}
            </Context.Provider>
        );
    }

}