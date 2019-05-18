import nanoid from 'nanoid'

export const ADD_CARD = '@@cards/add'

export const addCard = (name, columnId) => ({
  type: ADD_CARD,
  name,
  id: nanoid(8),
  columnId
})

const initialState = {
  cardsById: {}
}

export const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const newCard = {
        name: action.name,
        _id: action.id
      }

      return {
        cardsById: {
          ...state.cardsById,
          [action.id]: newCard
        }
      }

    default:
      return state
  }
}
