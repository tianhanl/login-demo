import React from 'react';

const FloatingMenu = props => (
  <div
    style={{
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      fontWeight: '300',
      fontFamily: 'Roboto, sans-serif'
    }}
  >
    {props.children}
  </div>
);

export default FloatingMenu;
