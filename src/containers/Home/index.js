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
                {context => {

                    const filteredItems = context.list.filter(
                        options => context.filterTodo(context.filter, options)
                    )

                    return (
                        <Fragment>
                            <AddItem onSubmit={context.addToState} onChange={context.changeTodo} />
                            <List items={filteredItems} />
                            <FilterItems onClick={context.switchFilter} />
                        </Fragment>
                    )

                }}
                </AppContext.Consumer>
            </main>
        )
    }
}

export default Home