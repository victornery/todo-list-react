import React from 'react'

const AppContext = React.createContext({
    list: [],
    addToState: (event) => {
        const value = event.target.value
    
        event.key === "Enter" && 
        this.setState((prevState) => { list: [...prevState, {todo: value, completed: 0}] })
    }
})

export default AppContext