import React from 'react'
import FilterButton from 'components/FilterButton'
import styles from './filter.module.css'

const FilterItems = ({ onClick }) => (
    <ul className={styles.filter}>
        <FilterButton onClick={onClick} typeFilter="all" title="Todas" />
        <FilterButton onClick={onClick} typeFilter="pending" title="Pendentes" />
        <FilterButton onClick={onClick} typeFilter="solved" title="Resolvidas" />
    </ul>
)

export default FilterItems