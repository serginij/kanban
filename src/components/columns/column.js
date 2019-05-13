import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from '@modules/cards'

import { Card } from '@components/card'

export const Column = props => {
  const [text, setText] = React.useState('')
  const cards = useSelector(state => state.cards.cardsById)
  const dispatch = useDispatch()

  const handleAddCard = id => {
    dispatch(addCard(text, id))
    setText('')
  }
  const cardsList = Object.values(props.cards).map(id => {
    let card = cards[id]
    return (
      <li key={card._id}>
        <Card text={card.name} />
      </li>
    )
  })
  return (
    <article>
      <b>{props.name}</b>
      <ul>{cardsList}</ul>
      <article>
        <input
          value={text}
          type="text"
          placeholder="Введите название карточки"
          onChange={e => setText(e.target.value)}
        />
        <button onClick={() => handleAddCard(props.columnId)}>
          Добавить карточку
        </button>
      </article>
    </article>
  )
}
