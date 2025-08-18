import { useContext, useReducer} from "react"

import AddTodo from "./add"
import TodoList from "./list"

import TodoProvider from "./TodoProvider"

function TodoApp()  {
    return (
        <>
            <h1>Todo App</h1>
            <TodoProvider>
                <AddTodo />
                <TodoList />
            </TodoProvider>
        </>
    )
}

export default TodoApp