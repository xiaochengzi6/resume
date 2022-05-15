import {CHANGEMARKDOWNDATA, CHANGESCROLLHEIGHTANDTOP, CHANGEGETTEXTARRAYS} from './constants'

export const change_markd = (data) =>({
  type: CHANGEMARKDOWNDATA,
  data
})

export const change_ScrollHeightTop = (data) =>({
  type: CHANGESCROLLHEIGHTANDTOP,
  height: data.height,
  top: data.top
})

export const change_GerTextArrays = (data) =>({
  type: CHANGEGETTEXTARRAYS,
  data
})