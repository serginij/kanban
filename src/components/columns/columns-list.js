import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'

import { Column } from './column'
import { moveCard } from '@modules/columns'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
`

export const ColumnsList = () => {
  const allColumns = useSelector(state => state.columns.allColumns)
  const columns = allColumns.map(id => <Column columnId={id} key={id} />)

  const dispatch = useDispatch()
  const handleMoveCard = props => dispatch(moveCard(props))

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) return
    handleMoveCard({
      cardId: draggableId,
      columnIdFrom: source.droppableId,
      columnIdTo: destination.droppableId,
      insertCardIndex: destination.index
    })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>{columns}</Wrapper>
    </DragDropContext>
  )
}
