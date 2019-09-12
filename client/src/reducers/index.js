import { combineReducers } from 'redux'
import data from '../data'


const reducer = (state = data, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

const rootReducer = combineReducers({
  reducer
})

export default rootReducer

