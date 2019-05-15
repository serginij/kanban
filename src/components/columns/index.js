import React from 'react'
import { addColumn } from '@modules/columns'

import { AddForm } from '../../ui/addForm'
import { ColumnsList } from './columnsList'

export const Columns = () => (
  <div>
    <ColumnsList />
    <AddForm onAdd={addColumn} text="Добавить колонку" />
  </div>
)
