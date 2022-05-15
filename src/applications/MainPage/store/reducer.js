import {CHANGEHEIGHT} from './constants.js'
import {changeGetHeight} from './actionCreators'
const defaultState = {
  height: 0
}

let reducer = (state = defaultState, action) => {
  switch(action.type){
   case CHANGEHEIGHT:
    return changeGetHeight(action.data)
    default:
      return state
  }
}

export default reducer