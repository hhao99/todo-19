import React, { useContext, useReducer } from 'react'

import todoReducer from './reducer'
import { initialState } from './reducer';
import TodoContext from './todoContext'

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider