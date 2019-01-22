import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import AppContext from 'utils/context'
import '../public/css/all.css' // CSS Commons

class App extends Component {
    state = {
        list: []
    }

    render() {
        const { list } = this.state
        return (
            <AppContext.Provider value={{
                list
            }}>
                <Home />
            </AppContext.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))