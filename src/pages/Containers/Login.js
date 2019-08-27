import React from 'react';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

import API from "../../APIInterface/APIInterface";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            user_id: "003504589",
            inputSoFarSoGood: true,
            inputHint: "Including the leading zeros"
        };

        this.verfiyUserInput = this.verfiyUserInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange = event => {
        this.setState({ user_id: event.target.value });
    };

    handleKeyPress = event => {
        if(event.key === "Enter") {
            console.log("Verify user input.");
            this.verfiyUserInput();
        }
    };

    verfiyUserInput() {
        if( this.state.user_id === "" || this.state.user_id.trim() === "") {
            this.setState({
                inputSoFarSoGood: false,
                invalidMsg: "Do type-in your ID."
            });
            return;
        }
        const api = new API();

        api.getUserInfo(this.state.user_id.trim())
            .then(info => {
                    if(info.statusText === 'OK' && info.data.status === "OK" ) {
                        this.props.userAuthenticated(info.data.user);
                    } else
                        this.setState({
                            inputSoFarSoGood: false,
                            inputHint: "Invalid user ID",
                    });
                }).catch(error => {
                    console.log('Error in verifyUserInput of Login.', error);
                    this.setState({inputHint: "Unable to verify your identity"});
                });
        this.setState({inputHing: "Checking..."});
    }

    render() {

        return  <div style={{textAlign: 'center', marginTop: '50px'}}>
                    <FormControl style={{margin: '20px', width: '200px'}}>
                        <InputLabel>Click To Enter Your ID</InputLabel>
                        <Input id="name-error" value={this.state.user_id} onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress} />
                        <FormHelperText style={this.state.inputSoFarSoGood ? {color: 'blue'} : {color: 'red'}}>
                                {this.state.inputHint}
                        </FormHelperText>
                    </FormControl>
                    <br />{ this.state.user_id.length >= 9 ? <Button onClick={this.verfiyUserInput}>Click to proceed</Button> : ""}
                 </div>
    }
}

export default Login
