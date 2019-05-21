import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #fff;
  min-height: 1.5rem;
  border: none;
  border-radius: 3px;
  margin-bottom: 8px;
`

const Text = styled.p`
  padding: 8px 0 8px 12px;
`

export const Card = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}
