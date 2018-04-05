import React from 'react';

const CenterBox = props => (
  <div
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'radial-gradient(#ADD1E2 30%, #74C3DF)'
    }}
  >
    {props.children}
  </div>
);

export default CenterBox;
