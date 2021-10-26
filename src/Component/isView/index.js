import React, { useEffect } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { GetTextValue, GetCodeMirrorLine } from '../../redux/actionFunction'
let ViewDiv = ({ refs, refView, isViewMove, GetValueText, getTextArryValue, SetCodeLine }) => {
    let valueText = ''
    const divBox = <div className="cover-div" ></div>
    
    useEffect(() => {
        
        if (isViewMove) {
            refs.current.addEventListener("mouseover", bindMouseover);
            refs.current.addEventListener("mouseleave", mouseLeave)/*离开*/
            
            getTextArryValue.indexOf(valueText,0)
            /**
             * 这里需要异步的获取line的值 需要用到 redux-thunk
             */
            // SetCodeLine(oo)
            console.log('是数组吗',getTextArryValue instanceof Array)
            console.log('它的值',getTextArryValue )
            /**
             * GetValueText(valueText) *存储text*
             * 这里出现问题 在此处使用GetValueText(valueText)  indexOf 查找不到，
             * 解决办法先进行一次判断 预防valueText把空值传入致使Reducer在更新一次从而得到一个undefiend的值
            */
        }else{
            refs.current.removeEventListener("mouseover", bindMouseover)
            refs.current.removeEventListener("mouseleave", mouseLeave)
        }

        function mouseLeave() {
            const coverDiv = document.querySelector('.cover-div')
            if (coverDiv) { coverDiv.style.border = 0 }
        }
        function bindMouseover(e) {
            let length = e.target.children.length
            if (length === 0 && isViewMove) {
                const coverDiv = document.querySelector('.cover-div')
                if (coverDiv) {
                    valueText = e.srcElement.innerText/*找到其value然后和编辑器对比*/
                    // GetValueText(valueText)/*存储text*/
                    
                    console.log("是否找到",  getTextArryValue.indexOf(valueText,0))
                    let width = e.srcElement.clientWidth,
                    screenX = e.srcElement.offsetLeft,
                    screenY = e.srcElement.offsetTop - refView.current.scrollTop + 100,
                    heigth = e.srcElement.clientHeight;
                    // console.log('coverDiv',coverDiv)
                    coverDiv.style.border = "1px dashed rgb(218, 63, 202)";
                    coverDiv.style.height = heigth + 'px';
                    coverDiv.style.width = width + 'px';
                    coverDiv.style.top = screenY + 'px';
                    coverDiv.style.left = screenX + 'px';
                }
            }
        }
    })
    useEffect(()=>{
        if(valueText){GetValueText(valueText)/*存储text*/}
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
        getTextArryValue: state.GetMoveValueToLine.textArray
    }
}
const mapDispatch = (dispatch, ownProps) => {
    return {
        GetValueText: (text) => {
            dispatch(GetTextValue(text))
        },
        SetCodeLine: (line) => {
            dispatch(GetCodeMirrorLine)
        }
    }
}

export default ViewDiv = connect(
    mapStateProps,
    mapDispatch
)(ViewDiv)



