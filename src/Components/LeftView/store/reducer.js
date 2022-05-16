import {CHANGEHEIGHT, CHANGEWEITHMARED} from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  leftViewHieht: 0
})

const reducer = (state = defaultState, action) =>{
  console.log('sss',action.type)
  switch(action.type){
    
    // case CHANGEHEIGHT:
    //   return {
    //     ...state,
    //     leftViewHieht: action.data
    //   }
    case CHANGEHEIGHT: 
      return state.set('leftViewHieht', action.data)
    default:
    return state;
  }
}

export default reducer