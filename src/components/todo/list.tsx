import React, { useContext } from "react"
import TodoContext from "./todoContext"
import TodoItem from "./item"
function TodoList() {
    const { state } = useContext(TodoContext)
    const { list } = state

    return (
        <>
            <h1>Todo List</h1>
            <ul className="list-none p-0 mb-4">
                {list.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </ul>

            <h3 className="text-sm text-gray-500 text-right">Total Todos: {state.count}</h3>
        </>
    )
}

export default TodoList