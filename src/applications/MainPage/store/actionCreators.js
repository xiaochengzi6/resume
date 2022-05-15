import {CHANGEMARKD, CHANGEHEIGHT, CHANGEISDOWNPDF} from './constants.js'

export const changeGetmarkd = (data) =>({
  type: CHANGEMARKD,
  data
})

// 获得高度
export const changeGetHeight = (data) =>({
  type: CHANGEHEIGHT,
  data
})

export const changeGetIsDownPdf = (data) =>({
  type: CHANGEISDOWNPDF,
})