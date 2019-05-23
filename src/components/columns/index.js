import React from 'react'
import { addColumn } from '@modules/columns'
import { useDispatch } from 'react-redux'

import { AddForm } from '@ui/addForm'
import { ColumnsList } from './columns-list'

export const Columns = () => {
  const dispatch = useDispatch()
  const handleAddColumn = name => dispatch(addColumn(name))

  return (
    <>
      <ColumnsList />
      <AddForm
        onAdd={handleAddColumn}
        type="column"
        placeholder="Название колонки"
        inputText="Добавить еще одну колонку"
        buttonText="Добавить колонку"
      />
    </>
  )
}
