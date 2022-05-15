import {combineReducers} from 'redux';
import { reducer as MainPageReducers } from '../applications/MainPage/store/index';
import { reducer as RightWrithReducers } from '../Components/RightWrith/store/index';
import { reducer as LeftButtonReducers } from '../Components/LeftViewButton/store/index';
import { reducer as LeftViewReducers } from '../Components/LeftView/store/index'
// 合并
export default combineReducers({
  MainPage: MainPageReducers,
  RightDate: RightWrithReducers,
  LiftButton: LeftButtonReducers,
  leftView: LeftViewReducers
}) 