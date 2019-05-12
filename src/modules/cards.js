import nanoid from 'nanoid'

export const ADD_CARD = '@@cards/add'
export const DELETE_CARD = '@@cards/delete'
const RENAME_CARD = '@@cards/rename'

export const addCard = (name, columnId) => ({
  type: ADD_CARD,
  name,
  id: nanoid(8),
  columnId
})

export const deleteCard = (id, columnId) => ({
  type: DELETE_CARD,
  id,
  columnId
})

export const renameCard = (name, id) => ({
  type: RENAME_CARD,
  name,
  id
})

const initialState = {
  cardsById: {}
}

export const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const newCard = {
        name: action.name
      }

      return {
        cardsById: {
          ...state.cardsById,
          [action.id]: newCard
        }
      }

    case DELETE_CARD:
      return {
        cardsById: state.cardsById.filter(cardId => cardId !== action.id)
      }

    case RENAME_CARD:
      return {
        cardsById: {
          ...state.cardsById,
          [action.id]: action.name
        }
      }

    default:
      return state
  }
}
