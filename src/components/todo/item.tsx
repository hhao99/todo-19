function TodoItem({todo}){
    return (
        <>
            <h1>{todo.id} - {todo.title}</h1>
        </>
    )
}

export default TodoItem