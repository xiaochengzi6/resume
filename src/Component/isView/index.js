import React, { useEffect } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { GetTextValue, GetCodeMirrorLine } from '../../redux/actionFunction'
// var line = 0;
let ViewDiv = ({ refs, refView, isViewMove, GetValueText, getTextArryValue, line, SetCodeLine }) => {
    let valueText = ''
    const divBox = <div className="cover-div" >
        <span>{line}</span>
    </div>

    useEffect(() => {

        if (isViewMove) {
            refs.current.addEventListener("mouseover", bindMouseover);
            refs.current.addEventListener("mouseleave", mouseLeave)/*离开*/

            // getTextArryValue.indexOf(valueText,0)
            // SetCodeLine(getTextArryValue.indexOf(valueText,0))

            /**
             * 这里需要异步的获取line的值 需要用到 redux-thunk
             */
            // SetCodeLine(oo)
            /**
             * GetValueText(valueText) *存储text*
             * 这里出现问题 在此处使用GetValueText(valueText)  indexOf 查找不到，
             * 解决办法先进行一次判断 预防valueText把空值传入致使Reducer在更新一次从而得到一个undefiend的值
            */
        } else {
            refs.current.removeEventListener("mouseover", bindMouseover)
            refs.current.removeEventListener("mouseleave", mouseLeave)
        }

        function mouseLeave() {
            const coverDiv = document.querySelector('.cover-div')
            if (coverDiv) { 
                coverDiv.style.border = 0 
                coverDiv.style.color = '#fff'
            
            }
        }
        function bindMouseover(e) {
            let length = e.target.children.length
            if (length === 0 && isViewMove) {
                const coverDiv = document.querySelector('.cover-div')
                if (coverDiv) {
                    valueText = e.srcElement.innerText/*找到其value然后和编辑器对比*/
                    // GetValueText(valueText)/*存储text*/
                    let number = getTextArryValue.indexOf(valueText, 0)
                    if(number === -1){SetCodeLine('')}else{SetCodeLine(number+1)}

                    let width = e.srcElement.clientWidth,
                        screenX = e.srcElement.offsetLeft,
                        screenY = e.srcElement.offsetTop - refView.current.scrollTop + 100,
                        heigth = e.srcElement.clientHeight;
                    coverDiv.style.border = "1px dashed rgb(218, 63, 202)";
                    coverDiv.style.color = '#111'
                    coverDiv.style.height = heigth + 'px';
                    coverDiv.style.width = width + 'px';
                    coverDiv.style.top = screenY + 'px';
                    coverDiv.style.left = screenX + 'px';
                }
            }
        }
    })
    useEffect(() => {
        if (valueText) { GetValueText(valueText)/*存储text*/ }
    })
    return (
        <>
            {isViewMove ? divBox : null}
        </>
    )

}

const mapStateProps = (state, ownProps) => {
    return {
        // writh: state.rightWrith_htmlString,
        refs: state.refMouseover,
        refView: state.leftViewRef,
        isViewMove: state.isMoveView,
        getTextArryValue: state.GetMoveValueToLine.textArray,
        line: state.SetcodeLine
    }
}
const mapDispatch = (dispatch, ownProps) => {
    return {
        GetValueText: (text) => {
            dispatch(GetTextValue(text))
        },
        SetCodeLine: (line) => {
            dispatch(GetCodeMirrorLine(line))
        }
    }
}

export default ViewDiv = connect(
    mapStateProps,
    mapDispatch
)(ViewDiv)



