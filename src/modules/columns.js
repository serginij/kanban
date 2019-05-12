import nanoid from 'nanoid'

import { ADD_CARD, DELETE_CARD } from './cards'

const ADD_COLUMN = '@@columns/add'
const DELETE_COLUMN = '@@columns/delete'
const RENAME_COLUMN = '@@columns/rename'

export const addColumn = name => ({
  type: ADD_COLUMN,
  name,
  id: nanoid(8)
})

export const deleteColumn = id => ({
  type: DELETE_COLUMN,
  id
})

export const renameColumn = (name, id) => ({
  type: RENAME_COLUMN,
  name,
  id
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

    case RENAME_COLUMN:
      return {
        ...state,
        columnsById: {
          ...state.columnsById,
          [action.id]: {
            ...state.columnsById[action.id],
            name: action.name
          }
        }
      }

    case DELETE_COLUMN:
      const { columnsById, allColumns } = state
      const { [action.id]: deletedColumn, ...rest } = columnsById
      return {
        ...state,
        columnsById: rest,
        allColumns: allColumns.filter(columnId => columnId !== action.id)
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

    case DELETE_CARD:
      return {
        ...state,
        columnsById: {
          ...state.columnsById,
          [action.columnId]: {
            ...state.columnsById[action.columnId],
            cards: state.columnsById[action.columnId].cards.filter(
              cardId => cardId !== action.id
            )
          }
        }
      }

    default:
      return state
  }
}
