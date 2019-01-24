import React from 'react'
import styles from './item.module.css'
import AppContext from 'utils/context'

const FilterButton = ({ title, onClick, typeFilter }) => (
  <AppContext.Consumer>
    {context => <li className={typeFilter === context.filter ? [styles.button, styles.actived].join(' ') : styles.button} onClick={onClick} data-filter={typeFilter}>{title}</li>}
  </AppContext.Consumer>
)

export default FilterButton