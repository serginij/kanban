import React from 'react'

export const AddForm = ({ onOpen, onClose, onAdd, text, id }) => {
  const [name, setName] = React.useState('')

  const handleAdd = e => {
    e.preventDefault()
    onAdd(name)
    setName('')
  }
  const handleChange = e => setName(e.target.value)

  return (
    <form onSubmit={handleAdd}>
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
