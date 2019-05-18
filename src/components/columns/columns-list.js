import React from 'react'
import { useSelector } from 'react-redux'

import { Column } from './column'

export const ColumnsList = () => {
  const allColumns = useSelector(state => state.columns.allColumns)
  const columns = allColumns.map(id => <Column columnId={id} key={id} />)

  return <ul>{columns}</ul>
}
