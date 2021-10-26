import React from 'react'
import 'antd/dist/antd.css'
import ViewMoveCode from '../ViewCodeMove/index'
import SynScroll from '../SynScroll/index'
import { Switch, Select } from 'antd';
const { Option } = Select;

const LeftButton =() => {
    return (
        <div className="leftView-top-button">
            <div className="leftView-bu-center">
                <SynScroll />
                <ViewMoveCode />
                <div className="leftView-bu-div" key='3'><span>未知</span><Switch size="small" /> </div>
                <div className="leftView-bu-div" key='4'><span>一页纸</span><Switch size="small" /> </div>
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
}
export default LeftButton
