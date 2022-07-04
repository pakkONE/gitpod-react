import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                isLoggedIn={this.state.isLoggedIn}
                handleSignIn={this.handleSignIn}
                handleSignOut={this.handleSignOut}
                toggleIsLoggedIn={this.toggleIsLoggedIn} />
            </div>
        )
    }
}

export default MethodsAsPropsParent