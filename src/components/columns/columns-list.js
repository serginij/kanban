import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Column } from './column'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const ColumnsList = () => {
  const allColumns = useSelector(state => state.columns.allColumns)
  const columns = allColumns.map(id => <Column columnId={id} key={id} />)

  return <Wrapper>{columns}</Wrapper>
}
