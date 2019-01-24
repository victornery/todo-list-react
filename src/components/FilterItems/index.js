import React from 'react'
import FilterButton from 'components/FilterButton'
import styles from './filter.module.css'

const FilterItems = () => (
    <ul className={ styles.filter }>
        <FilterButton title="Todas" />
        <FilterButton title="Pendentes" />
        <FilterButton title="Resolvidas" />
    </ul>
)

export default FilterItems