import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CssBaseline/>
        <h1>Todos</h1>
        <TodoList/>
    </>
  )
}

export default App
