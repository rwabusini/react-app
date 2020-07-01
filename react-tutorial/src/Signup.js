// import React from 'react';
// import axios from 'axios';
// class Signup extends React.Component {
//     constructor(props) {
//         super(props)

//         this.onChangeUserName = this.onChangeUserName.bind(this);
//         this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//         this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             name: '',
//             email: '',
//             password:''
//         }
//     }
//     onChangeUserName(e) {
//         this.setState({ name: e.target.value })
//     }

//     onChangeUserEmail(e) {
//         this.setState({ email: e.target.value })
//     }
//     onChangeUserPassword(e) {
//         this.setState({ password: e.target.value })
//     }

//     onSubmit(e) {
//         e.preventDefault()

//         const userObject = {
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         };
//         axios.post('http://localhost:5000/register', userObject)
//             .then((res) => {
//                 console.log(res.data)
//             }).catch((error) => {
//                 console.log(error)
//             });

//         this.setState({ name: '', email: '', password:'' })
//     }
        
//     render() {
//         return (
//             <div>
//                 <div id="signup">
//                     <input type="text" id="name" placeholder="name" value={this.state.name} onChange={this.onChangeUserName} />
                    
//                     <input type="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeUserEmail} />
//                     <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangeUserPassword} />
//                     <input type="submit" value="Create User" />
//                     {/* <button id="send">Send</button> */}
//                 </div>
//             </div>
//         )
//     }
// }
// export default Signup;
//**************************************************** */
import React from 'react';
import axios from "axios";
class Signup extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: ""
        }
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:5000/register', user)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', email: '', password: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div id="signup">
                        <input type="text" id="name" placeholder="name" value={this.state.name} onChange={this.onChangeUserName} />
                        <input type="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeUserEmail} />
                        <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangeUserPassword} />
                        <button id="send">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;


