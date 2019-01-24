import React from 'react'
import styles from './list.module.css'
import ListItem from 'components/ListItem'

const List = ({ items }) => (
  <ul className={styles.list}>
    {items &&
      items.map((item, index) => (
        <ListItem key={index} indexElement={index} completed={item.completed} title={item.todo} />
      ))
    }
  </ul>
)

export default List