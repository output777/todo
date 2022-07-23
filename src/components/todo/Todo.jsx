import React from 'react';
import './style.css';

const Todo = ({todoData, setTodoData, id, title, desc, isDone,provided, snapshot}) => {
  console.log('Todo rendering...')

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
      <div className="todo-box" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} >
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
      <div className="todo-box" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
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