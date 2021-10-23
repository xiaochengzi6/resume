import React, { useEffect, useRef, useState } from 'react'

import './style.css'
import LeftViewButton from '../SynScroll/index'
import { connect } from 'react-redux'
import { getheight, GetLeftRef, RefMouseover } from '../../redux/actionFunction'



const LeftView = ({ writh, changeHeight, refProps, getRefView }) => {
    const divScroll = useRef(null)
    const htmls = useRef(null)
    refProps(htmls)
    getRefView(divScroll)
    useEffect(() => {
        const client = document.querySelector('.leftView--div').clientHeight
        changeHeight(Number(client))
    })

    return (
        <>
            <LeftViewButton />
            <div className="leftView" ref={divScroll}>
                <div className="leftView--div">
                    <div dangerouslySetInnerHTML={{ __html: writh }} className="nn" ref={htmls} />
                </div>
            </div>
        </>
    )
}

const mapStateProps = (state, ownProps) => {
    return {
        writh: state.rightWrith_htmlString,/*html*/
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return {
        changeHeight: (height) => {
            dispatch(getheight(height))
        },
        getRefView: (obj) => {
            dispatch(GetLeftRef(obj)) /*leftView ref*/
        },
        refProps: (te) => {
            dispatch(RefMouseover(te))/*nn ref*/
        }
    }
}
const LeftViewCom = connect(
    mapStateProps,
    mapDispatchProps
)(LeftView)
export default LeftViewCom

