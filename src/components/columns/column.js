import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCard } from '@modules/cards'

import { AddForm } from '@ui/addForm'
import { CardsList } from '@components/card/cards-list'

const Wrapper = styled.li`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #dfe3e6;
  border-radius: 3px;
  max-height: 94vh;
  margin-right: 12px;
`

const Name = styled.h3`
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 12px;
  &:last-child {
    padding-bottom: 0;
  }
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
      <CardsList cardsList={cards} columnId />
      <AddForm
        onAdd={handleAddCard}
        buttonText="Добавить карточку"
        inputText="Добавить еще одну карточку"
        placeholder="Название карточки"
        type="card"
      />
    </Wrapper>
  )
}
