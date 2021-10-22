import React, { useEffect, useRef, useState } from 'react'
import 'antd/dist/antd.css'
import './style.css'

import { connect } from 'react-redux'
import { getheight } from '../../redux/actionFunction'
import { Switch, Select } from 'antd';
const { Option } = Select

// import propTypes from 'prop-types'
/**
 *接收 转换后的html 
 *
 * @param {*} {writh,changeHeight}
 * @return {*} 
 */
const LeftView = ({ writh, changeHeight, right_obj }) => {
    const divScroll = useRef(null)
    const ViewHeight = useRef(null)
    const [conunt, setConunt] = useState(false)
    useEffect(() => {
        const client = document.querySelector('.leftView--div').clientHeight
        changeHeight(Number(client))
    })
    const handleChange = () => {
        //字体选择
    }
    const handleScnRoll = () => {
        setConunt(!conunt)
    }
    useEffect(() => {
        if (conunt) {
            const { top, height } = right_obj
            let viewBoxHeight = ViewHeight.current.getBoundingClientRect().height
            divScroll.current.scrollTop = Math.round(top * ((viewBoxHeight + 178) / (height))) - 85
        }
    })
    return (
        <>
            <div className="leftView-top-button">
                <div className="leftView-bu-center">
                    <div className="leftView-bu-div" key='1'><span>同步滚动</span><Switch size="small" onClick={handleScnRoll} /> </div>
                    <div className="leftView-bu-div" key='2'><span>一页纸</span><Switch size="small" /> </div>
                    <div className="leftView-bu-div" key='3'><span>可视化</span><Switch size="small" /> </div>
                    <div className="leftView-bu-div" key='4'><span>未知</span><Switch size="small" /> </div>
                    <div className="leftView-bu-font">
                        <span>更换字体 </span>
                        {<Select
                            labelInValue
                            bordered={true}
                            defaultValue={{ value: "字体选择" }}
                            style={{ width: 150 }}
                            onChange={handleChange}
                            size={'small'}
                        >
                            <Option value="jack" key='1'>黑体</Option>
                            <Option value="lucy" key='1'>宋体</Option>
                        </Select>}
                    </div>
                </div>
            </div>
            <div className="leftView" ref={divScroll}>
                <div className="leftView--div" ref={ViewHeight}>
                    <div dangerouslySetInnerHTML={{ __html: writh }} className="nn" />
                </div>
            </div>
        </>
    )
}

const mapStateProps = (state, ownProps) => {
    return {
        /*将html传进去*/
        writh: state.rightWrith_htmlString,
        right_obj: state.rightWrith_scrollHeight
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return {
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

