const todoReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const todo = { title: action.payload.title, id: Date.now()}
            return {list: [...state.list, todo]}
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state
    }
}
export const initialState = {
    list: [],
    count: 0
}
export default todoReducer;