import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCard } from '@modules/cards'

import { AddForm } from '@ui/addForm'
import { CardsList } from '@components/card/cards-list'

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 500px
  width: 316px;
  background-color: #dfe3e6;
  border-radius: 3px;
  max-height: 94vh;
  margin-right: 12px;
`

const Name = styled.b`
  font-weight: bold;
  padding: 12px;
`

export const Column = ({ columnId }) => {
  const { name, cards } = useSelector(
    state => state.columns.columnsById[columnId]
  )
  const dispatch = useDispatch()
  const handleAddCard = name => dispatch(addCard(name, columnId))

  return (
    <Wrapper>
      <Name>{name}</Name>
      <CardsList cardsList={cards} />
      <AddForm onAdd={handleAddCard} text="карточку" />
    </Wrapper>
  )
}
