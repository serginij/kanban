import { columns } from './columns'
import * as actionCreators from './columns'
import { addCard } from './cards'

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

  it('should add new card', () => {
    const testColumnId = '8c7w-er3'
    const initialState = {
      columnsById: {
        [testColumnId]: {
          name: '123',
          cards: [],
          _id: testColumnId
        }
      },
      allColumns: [testColumnId]
    }

    const action = addCard('Test card', testColumnId)
    const { id } = action

    const expectedState = {
      columnsById: {
        [testColumnId]: {
          name: '123',
          cards: [id],
          _id: testColumnId
        }
      },
      allColumns: [testColumnId]
    }

    expect(columns(initialState, action)).toEqual(expectedState)
  })
})
