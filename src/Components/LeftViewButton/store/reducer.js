import {
  CHANGESYNCSCROLL,
  CHANGEVIEWMOVECODE,
  CHANGEONEPAPER,
  CHANGEFONTFAMILY,
} from "./constants";

const defaultState = {
  isSyncScroll: false,
  isViewModeCode: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGESYNCSCROLL:
      return {
        ...state,
        isSyncScroll: !state.isSyncScroll,
      };
    case CHANGEVIEWMOVECODE:
      return {
        ...state,
        isViewModeCode: !state.isViewModeCode,
      };
    default:
      return state;
  }
};

export default reducer;
