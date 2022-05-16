import {CHANGEHEIGHT} from './constants.js'
import {changeGetHeight} from './actionCreators';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  height: 0
})

let reducer = (state = defaultState, action) => {
  switch(action.type){
   case CHANGEHEIGHT:
    return state.set('height', action.data)
    default:
      return state
  }
}

export default reducer