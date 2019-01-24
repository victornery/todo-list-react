import React, { Component, Fragment } from 'react'
import AddItem from 'components/AddItem'
import List from 'components/List'
import FilterItems from 'components/FilterItems'
import AppContext from 'utils/context'
import styles from './home.module.css'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <main className={styles.home}>
                <h1>TODO List</h1>

                <AppContext.Consumer>
                    {context => <AddItem onSubmit={context.addToState} onChange={context.changeTodo} />}
                </AppContext.Consumer>

                <AppContext.Consumer>
                    {context => {
                        const items = context.list
                        const filteredItems = items.filter(options => context.filterTodo(context.filter, options))
                        return <List items={filteredItems} />
                    }
                    }
                </AppContext.Consumer>
                <AppContext.Consumer>
                    {context => <FilterItems onClick={context.switchFilter} />}
                </AppContext.Consumer>
            </main>
        )
    }
}

export default Home