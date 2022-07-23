import React from 'react'
import Todo from '../todo/Todo';
import './style.css';

const List = ({todoData, setTodoData}) => {
  return (
    <div>
      <h2 className='sectionTitle'>Working.. 🔥</h2>
      <ul className='lists'>
        {todoData.map((data) => 
          data.isDone === false ? (<Todo key={data.id} todoData={todoData} setTodoData={setTodoData} id={data.id} title={data.title} desc={data.desc} isDone={data.isDone} /> ): null
        )}
      </ul>
      <h2 className='sectionTitle'>Done..! 🎉</h2>
      <ul className='lists'>
      {todoData.map((data) => 
          data.isDone === true ? (<Todo key={data.id} todoData={todoData} setTodoData={setTodoData} id={data.id} title={data.title} desc={data.desc} isDone={data.isDone} /> ): null
        )}
      </ul>
    </div>
  )
}

export default List