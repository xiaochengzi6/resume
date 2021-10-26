import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { Switch } from 'antd';

let LeftViewButton = ({ right_obj, getRefView }) => {
    const [conunt, setConunt] = useState(false)
    const handleScnRoll = () => {
        setConunt(!conunt)/*判断 是否关闭同时滚动*/
    }

    useEffect(() => {
        if (conunt) {
            const { top, height } = right_obj
            let viewBoxHeight = getRefView.current.children[0].getBoundingClientRect().height
            console.log('viewBoxHeight', getRefView)
            getRefView.current.scrollTop = Math.round(top * ((viewBoxHeight + 150) / (height))) /*view盒子的scrollTop会跟随编辑区盒子的scrollTop成比例移动*/
        }
    })
    return (
        <div className="leftView-bu-div" key='1'><span>同步滚动</span><Switch size="small" onClick={handleScnRoll} /></div>
    )
};

const mapStartProps = (state, ownProps) => {
    return {
        right_obj: state.rightWrith_scrollHeight,
        getRefView: state.leftViewRef
    }
};
const mapDispatch = (dispatch, ownProps) => {
    return {

    }
}
LeftViewButton = connect(
    mapStartProps,
    // mapDispatch
)(LeftViewButton)
export default LeftViewButton