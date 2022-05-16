import {CHANGEMARKDOWNDATA, CHANGESCROLLHEIGHTANDTOP, CHANGEGETTEXTARRAYS, CHANGEGETCODEDIV} from './constants'
import {fromJS} from 'immutable';

const defaultStates = fromJS({
  // 这里可以尝试获取初始值 这样也不用去初始化了
  marked: '',
  height: 0,
  textArrays: [],
  codeDivRef: {}
})


const reducer = (state = defaultStates, action) => {
  switch(action.type){
    case CHANGEMARKDOWNDATA:
      return state.set('marked', action.data)
    case CHANGESCROLLHEIGHTANDTOP:
      // 这里去除了 top
      return state.set('height', action.height)
    case CHANGEGETTEXTARRAYS:
      return state.set('textArrays', action.data)
    case CHANGEGETCODEDIV:
      return state.set('codeDivRef', action.data)
    default:
      return state;
  }
}

export default reducer
// const reducer = (state = defaultStates, action) => {
//   switch(action.type){
//     case CHANGEMARKDOWNDATA:
//       return {
//         ...state,
//         marked: action.data
//       }
//     case CHANGESCROLLHEIGHTANDTOP:
//       return{
//         ...state,
//         height: action.height,
//         top: action.top
//       }
//     case CHANGEGETTEXTARRAYS:
//       return {
//         ...state,
//         textArrays: action.data
//       }

//     case CHANGEGETCODEDIV:
//       return{
//         ...state,
//         codeDivRef: action.data
//       }
//     default:
//       return state;
//   }
// }