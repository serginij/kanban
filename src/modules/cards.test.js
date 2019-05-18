import { cards } from './cards'
import * as actionCreators from './cards'

describe('cards reducer', () => {
  it('should add new card', () => {
    const initialState = {
      cardsById: {}
    }

    const action = actionCreators.addCard('Test')
    const { id } = action

    const expectedState = {
      cardsById: {
        [id]: {
          name: 'Test',
          _id: id
        }
      }
    }

    expect(cards(initialState, action)).toEqual(expectedState)
  })
})
