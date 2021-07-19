import React from 'react';
import { TodoStore } from './store/store'
import TodoList from './components/list'
import styled from 'styled-components'
import './App.css'

const App = () => {
  const store = TodoStore.create({
    todos: [
      {
        title: 'Do the dishes'
      },
      {
        title: 'Wash the bathroom'
      },
      {
        title: 'Walk the dog'
      }
    ]
  })

  return (
    <Container>
      <TodoList todoStore={store} />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 300px;
    margin: 10px auto;
    font-family: Verdana, sans-serif;
    font-size: 15px;
`

export default App;
