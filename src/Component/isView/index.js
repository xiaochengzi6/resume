import React, { useEffect } from 'react'
import './style.css'
import { connect } from 'react-redux'
let divStyle
let ViewDiv = ({ refs, refView }) => {

    useEffect(() => {
        console.log('reddddf:', refs)
        console.log('refView---View:', refView.current.scrollTop)
    })

    useEffect(() => {
        refs.current.addEventListener("mouseover", bindMouseover)
        // mouseover
        function bindMouseover(e) {
            let length = e.target.children.length
            if (length === 0) {
                /*找到其value然后和编辑器对比*/
                let value = e.srcElement.innerText
                let width = e.srcElement.clientWidth
                let screenX = e.srcElement.offsetLeft
                let screenY = e.srcElement.offsetTop - refView.current.scrollTop + 100
                let heigth = e.srcElement.clientHeight
                
                const coverDiv = document.querySelector('.cover-div')
                coverDiv.style.height = heigth + 'px'
                coverDiv.style.width = width + 'px'
                coverDiv.style.top = screenY + 'px'
                coverDiv.style.left = screenX + 'px'
            }
        }
    })
    //取消
    // window.removeEventListener("mouseover",bindMouseover)

    // if(!divStyle){const yy = <div style={divStyle}></div>}
    // const ww = divStyle ? <div style={divStyle}></div> : null
    return (
        <div className="cover-div" style={divStyle}></div>
    )

}

const mapStateProps = (state, ownProps) => {
    return {
        writh: state.rightWrith_htmlString,
        refs: state.refMouseover,
        refView: state.leftViewRef
    }
}
const mapDispatch = (dispatch, ownProps) => {
    return {

    }
}

export default ViewDiv = connect(
    mapStateProps,
    mapDispatch
)(ViewDiv)
