import {CHANGEHEIGHT, CHANGEMARKD} from './constants.js'
import {changeGetHeight, change_markd} from './actionCreators';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  height: 0,
  updataMarked: true
})

let reducer = (state = defaultState, action) => {
  switch(action.type){
   case CHANGEHEIGHT:
    return state.set('height', action.data)
    case CHANGEMARKD:
      return state.set('updataMarked', action.data)
    default:
      return state
  }
}

export default reducer