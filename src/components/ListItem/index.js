import React from 'react'
import styles from './item.module.css'

const ListItem = ({ title, completed, onClick }) => 

<li className={completed ? [styles.item, styles.completed].join(' ') : styles.item} onClick={onClick}>{ title }</li>

export default ListItem