import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

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

  pading-bottom: ${props => props.isDraggingOver && '40px'};
`

export const CardsList = ({ cardsList, columnId }) => {
  const cardsById = useSelector(state => state.cards.cardsById)
  const cards = cardsList.map((id, index) => (
    <Card key={id} id={id} text={cardsById[id].name} index={index} />
  ))

  return (
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {cards}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  )
}
