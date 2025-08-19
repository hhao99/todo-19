import { useContext } from 'react'
import TodoContext from './todoContext'
function TodoItem({todo}){
    const { dispatch } = useContext(TodoContext)
    const removeTodo = (todo) => {
        dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } })
    }
    return (
        <>
            <li className="flex items-center justify-between p-2 border-b border-gray-200">
                <span>{todo.id}</span>
                <span className="flex-1 mx-2">{todo.title}</span>
                <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeTodo(todo)}>
                    Remove
                </button>
            </li>
        </>
    )
}

export default TodoItem