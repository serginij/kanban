import React from 'react'
import { useSelector } from 'react-redux'

import { Card } from './index'

export const CardsList = ({ cardsList }) => {
  const cardsById = useSelector(state => state.cards.cardsById)
  const cards = cardsList.map(id => <Card key={id} text={cardsById[id].name} />)

  return <ul>{cards}</ul>
}
