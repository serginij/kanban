import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from '@modules/cards'

import { AddForm } from '@ui/addForm'
import { CardsList } from '../card/cards-list'

export const Column = ({ columnId }) => {
  const { name, cards, id } = useSelector(
    state => state.columns.columnsById[columnId]
  )
  const dispatch = useDispatch()
  const handleAddCard = name => dispatch(addCard(name, columnId))

  return (
    <li>
      <h4>{name}</h4>
      <CardsList cardsList={cards} />
      <AddForm onAdd={handleAddCard} text="Добавить карточку" />
    </li>
  )
}
