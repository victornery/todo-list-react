import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import AppContext from 'utils/context'
import '../public/css/all.css' // CSS Commons

class App extends Component {
    constructor() {
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
            ],
            data: '',
            filter: 'all'
        }
    }

    render() {
        const { list, data, filter } = this.state

        const addToState = (event) => {
            event.preventDefault()
            const value = data

            console.log(event.target.data)

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

            this.setState({ data: '' })
        }

        const completeTodo = (newIndex) => {

            this.setState(() => {
                return {
                    list: this.state.list.map((val, index) => {

                        if (newIndex === index) {
                            return {
                                todo: val.todo,
                                completed: !val.completed
                            }
                        } else {
                            return {
                                todo: val.todo,
                                completed: val.completed
                            }
                        }

                    })
                }
            })


        }

        const changeTodo = (event) => {
            this.setState({ data: event.target.value })
        }

        const removeTodo = (event) => {
            console.log(event)
        }

        const switchFilter = (event) => {
            const newFilter = event.target.dataset.filter
            filter !== newFilter && this.setState({ filter: newFilter })
        }

        const filterTodo = (type, options) => {
            switch (type) {
                case 'all':
                    return options
                    break;
                case 'pending':
                    return options.completed === false
                    break;

                case 'solved':
                    return options.completed !== false
                    break;
                default:
                    return options
                    break
            }
        }

        return (
            <AppContext.Provider value={{
                list,
                addToState,
                completeTodo,
                changeTodo,
                removeTodo,
                filter,
                filterTodo,
                switchFilter,
                data
            }}>
                <Home />
            </AppContext.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))