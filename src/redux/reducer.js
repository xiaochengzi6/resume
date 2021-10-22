import state_base from './state'
export default function Reducer(state = state_base, action) {
    switch (action.type) {
        case 'ISDOWN--PDF':
            return {
                ...state,
                isDownPDF: !state.isDownPDF,

            }
        case 'LEFTDIV--HEIGHT':
            return {
                ...state,
                leftView_height: action.value,

            }
        case 'RIGHTWRITH--MD':
            return {
                ...state,
                rightWrith_markd: action.md,

            }
        case 'TANSFLOW--MARKD-HTML':
            return {
                ...state,
                rightWrith_htmlString: action.html,
            }
        case 'CHANGE--RIGHT-SCROLLHEIGHT':
            return {
                ...state,
                rightWrith_scrollHeight: {
                    top: action.top,
                    height: action.height
                }
            }
        default:
            return state
    }
}