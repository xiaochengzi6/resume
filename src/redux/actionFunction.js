export  function isDownPdf() {
    return {
        type: 'ISDOWN--PDF',
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