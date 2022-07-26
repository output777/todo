import React, {useState} from 'react'
import Form from '../form/Form'
import Header from '../header/Header'
import Layout from '../layout/Layout'
import List from '../list/List'

const TodoList = () => {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');
  const [desc, setDesc] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('TodoList rendering...')

    let newTodo = {
      id:Date.now(),
      title: value,
      desc: desc,
      isDone: false,
    }

    setTodoData((prev) => [...prev, newTodo])
    setValue('');
    setDesc('');
  }

  return (
    <Layout>
      <Header />
      <Form handleSubmit={handleSubmit} value={value} setValue={setValue} desc={desc} setDesc={setDesc} />
      <List todoData={todoData} setTodoData={setTodoData} />
    </Layout>
  )
}

export default TodoList