import React from 'react'
import styles from './addItem.module.css'
import AppContext from 'utils/context'

const AddItem = ({ onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <AppContext.Consumer>
      {context => <input className={styles.input} onChange={onChange} value={context.data} type="text" placeholder="Adicione um item" />}
    </AppContext.Consumer>
  </form>
)

export default AddItem