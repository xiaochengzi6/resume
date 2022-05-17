import React, { useReducer, createContext } from "react";
import {fromJS} from 'immutable';

// 创建 context
export const PageButtonContext = createContext({});

export const CHANGEPAGEBUTTONFIRST = "/Context/PageButton/FIRST"; // 静入
export const CHANGEPAGEBUTTONLAST = "/Context/PageButton/LAST"; // 离开
export const CHANGEPAGEBUTTONRESELT = "/Context/PageButton/RESELT"; // 替换
export const CHANGEPAGEBUTTONDISPATCH = "/Context/PageButton/CHANGE" // 改变

export const CHANGEPAGEBUTTONMARKED = '/Context/CHANGEPAGEBUTTON/MARKED' // 记录 mk 的值
const reducer = (state, action) => {
  switch (action.type) {
    // 进入
    case CHANGEPAGEBUTTONFIRST:
      return state.set("Pagebutton", 0);
    // 离开
    case CHANGEPAGEBUTTONLAST:
      return state.set("Pagebutton", -1);
    // 替换
    case CHANGEPAGEBUTTONRESELT:
      return state.set("Pagebutton", 1);
      case CHANGEPAGEBUTTONDISPATCH:
        return state.set("Pagebutton", 2);
        case CHANGEPAGEBUTTONMARKED:
        return state.set("marked", action.data);
  }
};

export const PageButtonComponent = props =>{
  const [ContextData, dispatch] = useReducer(reducer, fromJS({
    Pagebutton: -2,
    marked: ''
  }))

  return (
    <PageButtonContext.Provider value={{ContextData, dispatch}}>
      {props.children}
    </PageButtonContext.Provider>
  )
}