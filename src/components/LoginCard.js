import LoginBox from './LoginBox';
import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  cardStyle: {
    maxWidth: '500px',
    overflow: 'hidden',
    margin: 'auto',
    display: 'flex'
  },
  decorationStyle: {
    flex: 1,
    background: '#8EC3E3'
  }
};

const LoginCard = () => (
  <Paper style={styles.cardStyle} zDepth={5}>
    <div style={styles.decorationStyle} />
    <LoginBox />
  </Paper>
);

export default LoginCard;
