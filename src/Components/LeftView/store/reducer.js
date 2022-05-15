import {CHANGEHEIGHT, CHANGEWEITHMARED} from './constants';
import {change_writeMared, change_height} from './actionCreate';

const defaultState = {
  leftViewHieht: 0,
}

const reducer = (state = defaultState, action) =>{
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