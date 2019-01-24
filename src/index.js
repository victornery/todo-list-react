import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import AppContext from 'utils/context'
import '../public/css/all.css' // CSS Commons

class App extends Component {
    constructor(props) {
        super()

        this.state = {
            list: [
                {
                    "todo": "Passar numa entrevista",
                    "completed": false
                },
                {
                    "todo": "Me inscrever numa ação",
                    "completed": false
                },
                {
                    "todo": "Fazer voluntariado",
                    "completed": true
                },
                {
                    "todo": "Comer açaí",
                    "completed": true
                },
                {
                    "todo": "Comprar pão",
                    "completed": true
                }
            ]
        }
    }

    render() {
        const { list } = this.state
        
        const addToState = (event) => {
            const value = event.target.value
            console.log(event)
        
            event.key === "Enter" && 
            this.setState((prevState) => { 
                
                let newList = [
                    ...prevState.list,
                    {
                        todo: value,
                        completed: 0
                    }
                ]

                return { list: newList }
            })
        }

        const completedTodo = (event) => {
            console.log(event)
        }

        return (
            <AppContext.Provider value={{
                list,
                addToState,
                completedTodo
            }}>
                <Home />
            </AppContext.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))