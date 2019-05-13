import React from 'react'

import { Card } from '@components/card'

const testCards = ['One', 'Two', 'Three']

export const Column = props => {
  const cards = testCards.map((card, index) => (
    <li key={index}>
      <Card text={card} />
    </li>
  ))
  return (
    <article>
      <b>{props.name}</b>
      <ul>{cards}</ul>
      <article>
        <input type="text" placeholder="Введите название карточки" />
        <button>Добавить карточку</button>
      </article>
    </article>
  )
}
