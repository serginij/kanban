import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Card } from './'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90%;
  margin: auto;
  width: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const CardsList = ({ cardsList }) => {
  const cardsById = useSelector(state => state.cards.cardsById)
  const cards = cardsList.map(id => <Card key={id} text={cardsById[id].name} />)

  return <Wrapper>{cards}</Wrapper>
}
