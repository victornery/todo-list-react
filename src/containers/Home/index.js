import React, { Component, Fragment } from 'react'
import AddItem from 'components/AddItem'
import Items from 'components/Items'
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
                        { context =>  <AddItem onKeyPress={context.addToState} />}
                    </AppContext.Consumer>

                    <AppContext.Consumer>
                        { context => <Items items={context.list} /> }
                    </AppContext.Consumer>
                    
                    <FilterItems />
                </main>
        )
    }
}

export default Home