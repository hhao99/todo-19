import React, { useContext } from "react"
import TodoContext from "./todoContext"
import TodoItem from "./item"
function TodoList() {
    const { state } = useContext(TodoContext)
    const { list } = state

    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {list.map(todo => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList