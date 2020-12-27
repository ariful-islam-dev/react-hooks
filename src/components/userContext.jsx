import React, { Component, createContext } from 'react';

let Context = null;
const { Provider, Consumer } = (Context = createContext())

class UserProvider extends Component {

    state = {
        user: {
            name: 'Md. Ariful Islam',
            email: 'ariful4082@gmail.com',
            languages: [
                'HTML',
                'CSS',
                'SCSS',
                'Javascript',
                'ReactJS',
                'NodeJS'
            ]
        },
        isAuthenticated: true
    };
    login = () => {
        this.setState({ isAuthenticated: true })
    }
    logout = () => {
        this.setState({ isAuthenticated: false })
    }
    addToShowcase = item => {

    }

    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    login: this.login,
                    logout: this.logout,
                    addToShowcase: this.addToShowcase
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { UserProvider, Consumer as UserConsumer, Context as UserContext };
