import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'

import { Card } from './'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90%;
  box-sizing: border-box;
  width: 100%;
  padding: 0 12px;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const CardsList = ({ cardsList, columnId }) => {
  const cardsById = useSelector(state => state.cards.cardsById)
  const cards = cardsList.map((id, index) => (
    <Card key={id} text={cardsById[id].name} index={index} />
  ))

  const onDragEnd = result => {
    const { destination, source, draggableId } = result
    return
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            {cards}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  )
}
