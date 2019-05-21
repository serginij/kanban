import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  background: #dfe3e6;
  /* width: ${props => (props.type ? '300px' : '100%')}; */
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-top: ${props => (props.type == 'true' ? '12px' : '0px')}
  input::placeholder {
    color: #b8b9bb;
    padding-top: 0;
  }
  textarea::placeholder {
    color: #b8b9bb;
  }
  border-radius: 3px;
`
const Input = styled.input`
  width: 288px;
  height: 1.5rem;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(9, 45, 66, 0.25);
  background: #fff;
  border: none;
  margin-bottom: 8px;
  padding: 8px 0 8px 12px;
`

const AddButton = styled.button`
  width: 50%;
  height: 2rem;
  background: #39c071;
  border-radius: 3px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`

const OpenForm = styled.div`
  display: flex;
  align-items: center;
  background: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 1.5rem;
  padding: 8px;
  color: #6b808c;
  cursor: pointer;
  padding-top: ${props => (props.type == 'true' ? '12px' : '0px')};
`

const CloseForm = styled(OpenForm)`
  padding: 0;
  justify-content: space-between;
  cursor: default;
  height: 2rem;
`

const Plus = styled.p`
  font-weight: 300;
  font-size: 2em;
  margin-right: 8px;
  padding-bottom: 3px;
  cursor: pointer;
`

const TextArea = styled.textarea`
  width: 288px;
  height: 3rem;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(9, 45, 66, 0.25);
  background: #fff;
  border: none;
  margin: 0 0 8px 0;
  padding: 8px 0 8px 12px;
`

export const AddForm = ({ onAdd, text }) => {
  const [name, setName] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const handleAdd = e => {
    e.preventDefault()
    if (name.replace(' ', '') != '') {
      onAdd(name)
    }
    setName('')
  }
  const handleChange = e => setName(e.target.value)
  const handleOpenForm = () => {
    let isOpen = open
    setOpen(!isOpen)
  }
  const isColumn = text === 'колонку' ? 'true' : 'false'

  const input =
    text === 'колонку' ? (
      <Input
        value={name}
        type="text"
        placeholder={'Введите название ' + text.replace('у', 'и')}
        onChange={handleChange}
        column={isColumn}
      />
    ) : (
      <TextArea
        value={name}
        placeholder={'Введите название ' + text.replace('у', 'и')}
        onChange={handleChange}
        column={isColumn}
      />
    )

  const form = !open ? (
    <OpenForm type={isColumn} onClick={handleOpenForm}>
      <Plus>+</Plus> Добавить еще одну {text}
    </OpenForm>
  ) : (
    <Wrapper onSubmit={handleAdd} type={isColumn}>
      {input}
      <CloseForm>
        <AddButton type="submit">Добавить {text}</AddButton>
        <Plus onClick={handleOpenForm}>×</Plus>
      </CloseForm>
    </Wrapper>
  )
  return form
}
