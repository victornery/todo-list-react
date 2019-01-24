import React from 'react'
import styles from './item.module.css'

const FilterButton = ({ title, actived, onClick }) => <li className={actived ? [styles.button, styles.actived].join(' ') : styles.button} onClick={onClick}>{ title }</li>

export default FilterButton