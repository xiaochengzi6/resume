import {CHANGEMARKDOWNDATA, CHANGESCROLLHEIGHTANDTOP, CHANGEGETTEXTARRAYS, CHANGEGETCODEDIV} from './constants'

const defaultStates = {
  // 这里可以尝试获取初始值 这样也不用去初始化了
  marked: '',
  height: 0,
  top: 0,
  textArrays: [],
  codeDivRef: {}
}

const reducer = (state = defaultStates, action) => {
  switch(action.type){
    case CHANGEMARKDOWNDATA:
      return {
        ...state,
        marked: action.data
      }
    case CHANGESCROLLHEIGHTANDTOP:
      return{
        ...state,
        height: action.height,
        top: action.top
      }
    case CHANGEGETTEXTARRAYS:
      return {
        ...state,
        textArrays: action.data
      }

    case CHANGEGETCODEDIV:
      return{
        ...state,
        codeDivRef: action.data
      }
    default:
      return state;
  }
}

export default reducer