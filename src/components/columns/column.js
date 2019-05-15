import React from 'react'
import { useSelector } from 'react-redux'
import { addCard } from '@modules/cards'

import { AddForm } from '../../ui/addForm'
import { CardsList } from '../card/cardsList'

export const Column = ({ columnId }) => {
  const { name, cards, id } = useSelector(
    state => state.columns.columnsById[columnId]
  )

  return (
    <li>
      <h4>{name}</h4>
      <CardsList cardsList={cards} />
      <AddForm onAdd={addCard} text="Добавить карточку" id={columnId} />
    </li>
  )
}
