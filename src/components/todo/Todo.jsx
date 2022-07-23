import React from 'react';
import './style.css';

const Todo = ({todoData, setTodoData, id, title, desc, isDone}) => {
  const handleDelete =(id) => {
    let newTodo = todoData.filter((data) => data.id !== id);
    setTodoData(newTodo);
  }

  const handleCompleted = (id) => {
    let newTodo = todoData.filter((data) => {
      if(data.id === id) {
        data.isDone = !data.isDone;
      }
      return data;
  })
    setTodoData(newTodo);
  }

  if(isDone === true) {
    return (
      <div className="todo-box">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className='redBtn' onClick={() => {
        handleDelete(id)
      } }>삭제하기</button>
      <button className='greenBtn' onClick={() => {
        handleCompleted(id)
      }}>취소</button>
    </div>
    )
  }else {
    return (
      <div className="todo-box">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className='redBtn' onClick={() => {
        handleDelete(id)
      } }>삭제하기</button>
      <button className='greenBtn' onClick={() => {
        handleCompleted(id)
      }}>완료</button>
    </div>
    )
  }

}

export default Todo