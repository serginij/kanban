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

  it('should change column name', () => {
    const testId = '8ca-bh3&'
    const initialState = {
      columnsById: {
        [testId]: {
          name: 'Test',
          cards: []
        }
      },
      allColumns: [testId]
    }

    const testName = 'New'

    const action = actionCreators.renameColumn(testName, testId)

    const expectedState = {
      columnsById: {
        [testId]: {
          name: testName,
          cards: []
        }
      },
      allColumns: [testId]
    }

    expect(columns(initialState, action)).toEqual(expectedState)
  })

  it('should remove column', () => {
    const initialState = {
      columnsById: {
        '8ca-bh3&': {
          name: 'First',
          cards: []
        },
        '9tye-q61': {
          name: 'Second',
          cards: []
        }
      },
      allColumns: ['8ca-bh3&', '9tye-q61']
    }

    const action = actionCreators.deleteColumn('8ca-bh3&')

    const expectedState = {
      columnsById: {
        '9tye-q61': {
          name: 'Second',
          cards: []
        }
      },
      allColumns: ['9tye-q61']
    }

    expect(columns(initialState, action)).toEqual(expectedState)
  })
})
