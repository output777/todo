import React from 'react';
import './style.css';

const Layout = React.memo((props) => {
  console.log('Layout rendering...')

  return (
    <div className='layout'>{props.children}</div>
  )
});

export default Layout