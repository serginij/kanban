const CREATE_COLUMN = '@@columns/create'

export const createColumn = name => ({
  type: CREATE_COLUMN,
  name
})

const initialState = {
  columns: []
}

export const columns = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COLUMN:
      const newColumn = {
        name: action.name,
        tasks: []
      }

      return {
        ...state,
        columns: [...state.columns, newColumn]
      }

    default:
      return state
  }
}
