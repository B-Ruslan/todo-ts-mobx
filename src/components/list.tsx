import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import Task from './todo'
import styled from 'styled-components'

const TodoList = observer(( {todoStore}: any ) => {
    const [newTask, setNewTask] = useState('')
    const [filterTask, setFilterTask] = useState('')

    function updateInput(e: any) {
        setNewTask(e.target.value)
        handleFilter(e)
    }

    function handleUpdate(e: any) {
        e.preventDefault()
        if (newTask.length > 0) {
            todoStore.addTodo(newTask)
        } else {
            return
        }
        setNewTask('')
    }

    function handleFilter(e: any) {
        e.preventDefault()
        setFilterTask(e.target.value)
        todoStore.tasksFilter(e.target.value)
    }

    return (
        <List>
            <Heading>Todolist with TS and MobX</Heading>
            <StyledUl>
                {!newTask ?
                 todoStore.todos.map((todo: any) => <Task task={todo} key={todo.id} />)
                 : todoStore.tasksFilter(filterTask).map((todo: any) => <Task task={todo} key={todo.id} />)}
            </StyledUl>
            <Navigation>
                <FormInput 
                    value={newTask} 
                    onChange={updateInput} 
                    onKeyPress={(e: any) => e.key === 'Enter' ? handleUpdate(e) : null} 
                    maxLength="20" 
                />
                <StyledButton type="button" onClick={handleUpdate}>Add</StyledButton>
            </Navigation>
            <h4>
                Tasks left: {todoStore.TasksToGo}
            </h4>
            <div>
            </div>
        </List>
    )
})

const FormInput = styled.input`
    width: 90%;
    outline: none;
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
`

const Heading = styled.h3`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

const List = styled.div`
    padding: 10px;
    border: 3px double #A1A1A4;
    border-radius: 15px;
`

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledButton = styled.button`
    float: right;
    background: palevioletred;
    color: #FFF;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 3px 10px;
    outline: none;
    cursor: pointer
`

const StyledUl = styled.ul`
    padding: 0px 3px;
`

export default TodoList
