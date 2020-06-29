import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div id="login">
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <button id="send">Send</button>
                </div>
            </div>
        )
    }
}
export default Login;