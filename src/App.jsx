import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'

function App() {
  // const [ todoList, setTodoList ] = useState([{task: 'eat cheese', isDone: false}, {task: 'build empire', isDone: false},{task: 'fly plane', isDone: false}])
  const [todoList, setTodoList] = useState(() => {
    const data = localStorage.getItem('todoList')
    if (data === null) return []
    return JSON.parse(data)
  })

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList]
  )


  return <div className='container'>
    < Header />
    < TodoList todoList={todoList} setTodoList={setTodoList}/>
    < AddTask todoList={todoList} setTodoList={setTodoList}/>
  </div>
}

export default App
