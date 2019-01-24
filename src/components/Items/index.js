import React from 'react'
import styles from './items.module.css'
import ListItem from 'components/ListItem'

const Items = ({ items }) => (
    <ul className={ styles.list }>
    {   items &&
        items.map((item, index) => <ListItem key={index} completed={item.completed} title={ item.todo } />)
    }
    </ul>
)

export default Items