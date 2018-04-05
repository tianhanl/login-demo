import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginCard from './components/LoginCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CenterBox from './components/CenterBox';
import FloatingMenu from './components/FloatingMenu';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CenterBox>
          <FloatingMenu>
            <span style={{ color: '#FFF', fontSize: '13px' }}>
              Chinese/English
            </span>
          </FloatingMenu>
          <LoginCard />
        </CenterBox>
      </MuiThemeProvider>
    );
  }
}

export default App;
