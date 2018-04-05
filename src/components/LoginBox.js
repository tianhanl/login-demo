import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  loginBoxStyle: {
    padding: '2.5em 1.5em 2em',
    flex: 1
  },
  loginButtonStyle: {
    borderRadius: '20px',
    overflow: 'hidden',
    marginTop: '2rem'
  },
  underlineStyle: {
    borderColor: '#95D0DC'
  },
  floatingLabelFocusStyle: {
    color: '#95D0DC'
  },
  buttonLabelStyle: {
    fontSize: '11px',
    fontWeight: '300',
    fontFamily: 'Roboto, sans-serif'
  },
  linkStyle: {
    textDecoration: 'none',
    fontSize: '11px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300',
    color: '#95D0DC',
    padding: '0.25em'
  }
};

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleValueChange = name => {
    return event => {
      this.setState({
        [name]: event.target.value
      });
    };
  };
  handleLoginButtonClick = event => {};

  render() {
    return (
      <form style={styles.loginBoxStyle}>
        <TextField
          floatingLabelFixed={true}
          floatingLabelText={'Email'}
          value={this.state.email}
          fullWidth={true}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          onChange={this.handleValueChange('email')}
        />
        <TextField
          floatingLabelFixed={true}
          floatingLabelText={'Password'}
          value={this.state.password}
          fullWidth={true}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          onChange={this.handleValueChange('password')}
        />
        <RaisedButton
          onClick={this.handleLoginButtonClick}
          style={styles.loginButtonStyle}
          backgroundColor={'#8EC3E3'}
          labelStyle={styles.buttonLabelStyle}
          label="Login"
          labelColor={'#fff'}
          fullWidth={true}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            marginTop: '1rem'
          }}
        >
          <a style={styles.linkStyle} href="#">
            Forget Password
          </a>
          <a style={styles.linkStyle} href="#">
            Create an Account
          </a>
        </div>
      </form>
    );
  }
}

export default LoginBox;
