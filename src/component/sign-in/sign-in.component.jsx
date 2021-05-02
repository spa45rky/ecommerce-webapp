import React from 'react';
import './sign-in.styles.scss';
import {ReactComponent} from "*.svg";

class SignIn extends ReactComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
            password: ''
        }
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sigin in with your email and password</span>

                <form>
                    <input name='email' type='email' value={this.state.email}/>
                </form>

            </div>
        )
    }
}

export default SignIn;