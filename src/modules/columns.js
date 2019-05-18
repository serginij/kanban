import nanoid from 'nanoid'

import { ADD_CARD } from './cards'

const ADD_COLUMN = '@@columns/add'

export const addColumn = name => ({
  type: ADD_COLUMN,
  name,
  id: nanoid(8)
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

    default:
      return state
  }
}
