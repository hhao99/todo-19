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
        if(title.length <=4) return { success: false, message: 'Title is too short' }
        await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay
        dispatch({ type: 'ADD_TODO', payload: { title } })
        return { success: true, message: 'Todo added successfully' }
    }

    const [result, formAction, isPending] = useActionState(AddAction, {success: false, message: ''})

    return (

        <div className='mb-4'>
            <form action={formAction}>
                <label htmlFor="title">
                   {isPending? "Adding...": "What do you want to do?"}
                    <input className="border border-gray-300 p-2 rounded" disabled={isPending}
                        type="text" id="title" name="title" placeholder='new todo'/>
                </label>
                <p className={result.success ? 'text-green-600' : 'text-red-500'}>{result.message}</p>
            </form>
        </div>
    )
}

export default AddTodo