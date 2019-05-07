import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createColumn } from '@modules/columns'

export const App = () => {
  const [name, setName] = React.useState('')
  const columns = useSelector(state => state.columns)
  const dispatch = useDispatch()

  const handleCreateColumn = () => {
    dispatch(createColumn(name))
  }

  return (
    <>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={handleCreateColumn}>Create</button>
      {columns.columns.map(item => (
        <p key={item.name}>{item.name}</p>
      ))}
    </>
  )
}
