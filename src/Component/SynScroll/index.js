import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { Switch, Select } from 'antd';
const { Option } = Select;
// import { GetLeftRef } from '../../redux/actionFunction'
let LeftViewButton = ({ right_obj, getRefView }) => {
    const [conunt, setConunt] = useState(false)
    const handleScnRoll = () => {
        setConunt(!conunt)/*判断 是否关闭同时滚动*/
    }

    useEffect(() => {
        if (conunt) {
            const { top, height } = right_obj
            let viewBoxHeight = getRefView.current.children[0].getBoundingClientRect().height
            console.log('viewBoxHeight',getRefView)
            getRefView.current.scrollTop = Math.round(top * ((viewBoxHeight + 150) / (height))) /*view盒子的scrollTop会跟随编辑区盒子的scrollTop成比例移动*/
        }
    })
    return(
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
                        // onChange={handleChange}
                        size={'small'}
                    >
                        <Option value="jack" key='1'>黑体</Option>
                        <Option value="lucy" key='1'>宋体</Option>
                    </Select>}
                </div>
            </div>
        </div>

    )
};

const mapStartProps = (state,ownProps) => {
    return{
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