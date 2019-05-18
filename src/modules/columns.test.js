import { columns } from './columns'
import * as actionCreators from './columns'

describe('columns reducer', () => {
  it('should add new column', () => {
    const initialState = {
      columnsById: {},
      allColumns: []
    }

    const action = actionCreators.addColumn('Test')
    const { id } = action

    const expectedState = {
      columnsById: {
        [id]: {
          name: 'Test',
          cards: [],
          _id: id
        }
      },
      allColumns: [id]
    }

    expect(columns(initialState, action)).toEqual(expectedState)
  })
})
