import React from 'react';
import './App.css';
import TodoList from './components/pages/TodoList';

function App() {
  console.log('App rendering...');

  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
