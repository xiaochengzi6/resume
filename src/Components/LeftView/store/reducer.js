import {CHANGEHEIGHT, CHANGEWEITHMARED} from './constants';

const defaultState = {
  leftViewHieht: 0,
}

const reducer = (state = defaultState, action) =>{
  console.log('sss',action.type)
  switch(action.type){
    
    case CHANGEHEIGHT:
      return {
        ...state,
        leftViewHieht: action.data
      }
    default:
    return state;
  }
}

export default reducer