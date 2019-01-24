import React from 'react'
import styles from './addItem.module.css'

const AddItem = ({ onKeyPress }) => <input className={styles.input} onKeyPress={onKeyPress} type="text" placeholder="Adicione um item" />

export default AddItem