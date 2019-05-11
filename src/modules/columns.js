const nanoid = require('nanoid')

const ADD_COLUMN = '@@columns/add'
const DELETE_COLUMN = '@@columns/delete'
const RENAME_COLUMN = '@@columns/rename'

export const addColumn = name => {
  return {
    type: ADD_COLUMN,
    name,
    id: nanoid(8)
  }
}

export const deleteColumn = id => {
  return {
    type: DELETE_COLUMN,
    columnId: id
  }
}

export const renameColumn = (name, id) => {
  return {
    type: RENAME_COLUMN,
    name,
    id: id
  }
}

const initialState = {
  columnsById: {},
  allColumns: []
}

export const columns = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      const columns = state.columnsById
      columns[action.id] = {
        name: action.name,
        cards: []
      }
      return {
        ...state,
        columnsById: columns
      }
    case RENAME_COLUMN:
      const column = state.columnsById[action.id]
      column.name = action.name
      return {
        ...state,
        columnsById: {
          ...this,
          [action.id]: column
        }
      }
    case DELETE_COLUMN:
      let { columnsById, allColumns } = state
      let { [action.id]: deletedColumn, ...rest } = columnsById
      allColumns.filter(columnId => columnId !== action.id)
      return {
        ...state,
        columnsById: rest,
        allColumns: allColumns
      }
    default:
      return state
  }
}
