import React,{useEffect} from 'react'
import './style.css'
import { connect } from 'react-redux'
import {getheight} from '../../redux/actionFunction'
import propTypes from 'prop-types'
/**
 *接收 转换后的html 
 *
 * @param {*} {writh,changeHeight}
 * @return {*} 
 */
const LeftView = ({ writh, changeHeight}) => {
    useEffect(()=>{
        const client = document.querySelector('.leftView--div').clientHeight
        console.log('getHeight:',client)
        console.log('getHeight-NUmber:',Number(client))
        changeHeight(Number(client))
    })

    return (
        <div className="leftView">
            <div className="leftView--div">
                <div dangerouslySetInnerHTML={{ __html: writh }} className="nn" />
            </div>
        </div>
    )
}

const mapStateProps = (state,ownProps) => {
    return{
        /*将html传进去*/
        writh: state.rightWrith_htmlString
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return{
        changeHeight: (height) => {
            dispatch(getheight(height))
        }
    }
}
const LeftViewCom = connect(
    mapStateProps,
    mapDispatchProps
)(LeftView)
export default LeftViewCom

