import nanoid from 'nanoid'

import { ADD_CARD } from './cards'

const ADD_COLUMN = '@@columns/add'
export const MOVE_CARD = '@@columns/moveCard'

export const addColumn = name => ({
  type: ADD_COLUMN,
  name,
  id: nanoid(8)
})

export const moveCard = ({
  cardId,
  columnIdFrom,
  columnIdTo,
  insertCardIndex
}) => ({
  type: MOVE_CARD,
  cardId,
  columnIdFrom,
  columnIdTo,
  insertCardIndex
})

const initialState = {
  columnsById: {},
  allColumns: []
}

export const columns = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      const newColumn = {
        name: action.name,
        cards: [],
        _id: action.id
      }

      return {
        ...state,
        columnsById: { ...state.columnsById, [action.id]: newColumn },
        allColumns: [...state.allColumns, action.id]
      }

    case ADD_CARD:
      return {
        ...state,
        columnsById: {
          ...state.columnsById,
          [action.columnId]: {
            ...state.columnsById[action.columnId],
            cards: [...state.columnsById[action.columnId].cards, action.id]
          }
        }
      }

    case MOVE_CARD:
      const filteredCardsFrom = state.columnsById[
        action.columnIdFrom
      ].cards.filter(id => id !== action.cardId)
      const cardsTo = state.columnsById[action.columnIdTo].cards.filter(
        id => id !== action.cardId
      )
      const newCardsTo = [
        ...cardsTo.slice(0, action.insertCardIndex),
        action.cardId,
        ...cardsTo.slice(action.insertCardIndex)
      ]
      return {
        ...state,
        columnsById: {
          ...state.columnsById,
          [action.columnIdFrom]: {
            ...state.columnsById[action.columnIdFrom],
            cards: filteredCardsFrom
          },
          [action.columnIdTo]: {
            ...state.columnsById[action.columnIdTo],
            cards: newCardsTo
          }
        }
      }

    default:
      return state
  }
}
