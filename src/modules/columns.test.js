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

    expect(columns(initialState, action)).toEqual({
      columnsById: {
        [id]: {
          name: 'Test',
          cards: []
        }
      },
      allColumns: [id]
    })
  })

  it('should change column name', () => {
    const initialState = {
      columnsById: {
        '8ca-bh3&': {
          name: 'Test',
          cards: []
        }
      },
      allColumns: ['8ca-bh3&']
    }

    const action = actionCreators.renameColumn('New', '8ca-bh3&')

    expect(columns(initialState, action)).toEqual({
      columnsById: {
        '8ca-bh3&': {
          name: 'New',
          cards: []
        }
      },
      allColumns: ['8ca-bh3&']
    })
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

    expect(columns(initialState, action)).toEqual({
      columnsById: {
        '9tye-q61': {
          name: 'Second',
          cards: []
        }
      },
      allColumns: ['9tye-q61']
    })
  })
})
