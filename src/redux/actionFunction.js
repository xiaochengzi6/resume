/*是否导出pdf*/
export  function isDownPdf() {
    return {
        type: 'ISDOWN--PDF',
    }
}
/*是否可视化*/
export function isMoveViewFunc() {
    return {
        type: 'ISMOVEVIEWFUNC'
    }
}
export  function getheight(height) {
    return {
        type: 'LEFTDIV--HEIGHT',
        value: height
    }
}

export  function writhMd(mark) {
    return {
        type: 'RIGHTWRITH--MD',
        md: mark
    }
}

export  function tansfromMH(htmls) {
    return {
        type: 'TANSFLOW--MARKD-HTML',
        html: htmls
    }
}
//保存 右侧高度
export function ChangeRightScrollHeight(top,height){
    return {
        type: 'CHANGE--RIGHT-SCROLLHEIGHT',
        top,
        height
    }
}
//View大盒子 的ref
export function GetLeftRef(ref){
    return {
        type: 'GET-LEFT-REF',
        ref
    }
}

//nn 小盒子 ref
export function RefMouseover(ref){
    return {
        type: 'GETEFMOUSEOVER',
        ref
    }
}

export function GetTextValue(text){
    return {
        type: 'GETTEXTVALUE',
        text
    }
}
export function GetTextArray(value){
    return {
        type: 'GETTEXTARRAY',
        value
    }
}
export function GetCodeMirrorLine(line){
    return {
        type: 'GETCODEMIRRORLINE',
        line
    }
}