import React, { useContext, useState } from 'react'
import TodoContext from './todoContext'
function AddTodo(){
    const [title, setTitle] = useState('')
    const { dispatch } = useContext(TodoContext)

    const onAdd = (e)=> {
        e.preventDefault()
        console.log('Add todo:', title)
        dispatch({ type: 'ADD_TODO', payload: { title } })
        setTitle('') // Clear input after adding
    }
    return (

        <>
            <h1>Add new Todo</h1>
            <form onSubmit={onAdd}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddTodo