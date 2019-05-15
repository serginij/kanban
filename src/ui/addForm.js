import React from 'react'
import { useDispatch } from 'react-redux'

export const AddForm = ({ onOpen, onClose, onAdd, text, id }) => {
  const [name, setName] = React.useState('')
  const dispatch = useDispatch()

  const handleAddColumn = e => {
    e.preventDefault()
    dispatch(onAdd(name, id))
    setName('')
  }

  const handleChange = e => setName(e.target.value)

  return (
    <form onSubmit={handleAddColumn}>
      <input
        value={name}
        type="text"
        placeholder="Введите название"
        onChange={handleChange}
      />
      <button type="submit">{text}</button>
    </form>
  )
}
