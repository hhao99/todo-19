import { 
    useContext, 
    // useState,
    useActionState,
} from 'react'
import TodoContext from './todoContext'


function AddTodo(){
    const { dispatch } = useContext(TodoContext)
    const AddAction = async (preState, formData) => {
        const title = formData.get('title').trim()
        dispatch({ type: 'ADD_TODO', payload: { title } })
        return { success: true, message: 'Todo added successfully' }
    }

    const [state, formAction] = useActionState(AddAction, {success: false, message: ''})

    return (

        <>
            <h1>Add new Todo</h1>
            <form action={formAction}>
                <input type="text" id="title" name="title"/>
                <button type="submit">Add</button>
                <p>{state.message}</p>
            </form>
        </>
    )
}

export default AddTodo