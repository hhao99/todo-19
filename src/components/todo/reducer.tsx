const todoReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const todo = { title: action.payload.title, id: Date.now()}
            return {list: [...state.list, todo], count: state.count + 1}
        case 'REMOVE_TODO':
            return {list: state.list.filter(todo => todo.id !== action.payload.id), count: state.count - 1}
        default:
            return state
    }
}
export const initialState = {
    list: [],
    count: 0
}
export default todoReducer;