import React, { createContext, useReducer } from 'react'
import AppReducer, { ADD_SHORT_LINK, DELETE_SHORT_LINK } from './AppReducer'

// Inital state
const initalState = {
    shortLinks: []
}

// Create context
export const GlobalContext = createContext(initalState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    // Actions
    function deleteShortLink(code) {
        dispatch({
            type: DELETE_SHORT_LINK,
            payload: code
        })
    }

    function addShortLink(linkDetails) {
        dispatch({
            type: ADD_SHORT_LINK,
            payload: linkDetails
        })
    }

    return (<GlobalContext.Provider value={{
        shortLinks: state.shortLinks,
        deleteShortLink,
        addShortLink
    }}>
        {children}
    </GlobalContext.Provider>)
}