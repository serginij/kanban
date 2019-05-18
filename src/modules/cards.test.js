import { cards } from './cards'
import * as actionCreators from './cards'

describe('cards reducer', () => {
  it('should add new card', () => {
    const initialState = {
      cardsById: {}
    }

    const name = 'Test card name'
    const action = actionCreators.addCard(name)
    const { id } = action

    const expectedState = {
      cardsById: {
        [id]: {
          name,
          _id: id
        }
      }
    }

    expect(cards(initialState, action)).toEqual(expectedState)
  })
})
