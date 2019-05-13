import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addColumn } from '@modules/columns'

import { Column } from './column'

export const Columns = () => {
  const [name, setName] = React.useState('')
  const columns = useSelector(state => state.columns.columnsById)
  const dispatch = useDispatch()

  const handleAddColumn = () => {
    dispatch(addColumn(name))
    setName('')
  }

  const columnsList = Object.values(columns).map(column => (
    <Column
      name={column.name}
      cards={column.cards}
      key={column._id}
      columnId={column._id}
    />
  ))
  return (
    <section>
      {columnsList}
      <article>
        <input
          value={name}
          type="text"
          placeholder="Введите название колонки"
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => handleAddColumn()}>Добавить колонку</button>
      </article>
    </section>
  )
}
