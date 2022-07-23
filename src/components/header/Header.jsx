import React from 'react'
import './style.css';

const Header = React.memo(() => {
  console.log('Header rendering...')

  return (
    <div className='header'>
    <p>My Todo List</p>
    <p>React</p>
  </div>
  )
});

export default Header