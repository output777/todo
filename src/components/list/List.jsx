import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Todo from '../todo/Todo';
import './style.css';

const List = ({todoData, setTodoData}) => {
  const handleEnd = (result) => {
    if(!result.destination) return;

    const newTodoData = todoData;

    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);

  }

  return (
    <div>
      <h2 className='sectionTitle'>Working.. 🔥</h2>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
              <ul className='lists' {...provided.droppableProps} ref={provided.innerRef}>
                {todoData.map((data, index) => 
                  data.isDone === false ? (
                  <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                    {(provided, snapshot) => ( 
                  <Todo key={data.id} todoData={todoData} setTodoData={setTodoData} id={data.id} title={data.title} desc={data.desc} isDone={data.isDone} provided={provided} snapshot={snapshot} /> 
                  )}
                  </Draggable>)
                  : null
                )}
                {provided.placeholder}
              </ul>
          )}
      </Droppable>
      </DragDropContext>
      
      <h2 className='sectionTitle'>Done..! 🎉</h2>
      <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId='todo'>
      {(provided) => (
      <ul className='lists' {...provided.droppableProps} ref={provided.innerRef}>
      {todoData.map((data, index) => 
          data.isDone === true ? (
            <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
              {(provided, snapshot) => ( 
            <Todo key={data.id} todoData={todoData} setTodoData={setTodoData} id={data.id} title={data.title} desc={data.desc} isDone={data.isDone} provided={provided} snapshot={snapshot} /> 
            )}
            </Draggable>)
            : null
          )}
          {provided.placeholder}
      </ul>
      )}
      </Droppable>
      </DragDropContext>
    </div>
  )
}

export default List