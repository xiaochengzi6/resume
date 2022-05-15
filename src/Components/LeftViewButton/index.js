import React, {useEfect, useState} from "react";
import { connect } from "react-redux";
import './style.css'
import {change_SyncScroll, change_ViewMoveCode} from './store/actionCreate'
// import ViewMoveCode from "../ViewCodeMove/index";
// import SynScroll from "../SynScroll/index";
import { Switch, Select } from "antd";
const { Option } = Select;

let LeftButton = (props) => {

    let {handleClickSyncScroll, handleClickViewMoveCode} = props
  // 这里做出判断逻辑 是否开启功能
  return (
    <div className="leftView-top-button">
      <div className="leftView-bu-center">
        {/* 同步滚动 */}
        {/* <SynScroll /> */}
        <div className="leftView-bu-div" key="1">
          <span>同步滚动</span>
          <Switch size="small" onClick={handleClickSyncScroll} />
        </div>
        {/* 可视化 */}
        {/* <ViewMoveCode /> */}
        <div className="leftView-bu-div" >
            <span>可视化</span>
            <Switch size="small" onClick={handleClickViewMoveCode} />
        </div>
        <div className="leftView-bu-div" key="3">
          <span>未知</span>
          <Switch size="small" />
        </div>
        <div className="leftView-bu-div" key="4">
          <span>一页纸</span>
          <Switch size="small" onClick={()=>{}} />
        </div>
        <div className="leftView-bu-font">
          <span>更换字体</span>
          {
            <Select
              labelInValue
              bordered={true}
              defaultValue={{ value: "字体选择" }}
              style={{ width: 150 }}
              // 这里要看一下 ant 文档
            //   onClick={()=>{}}
              size={"small"}
            >
              <Option value="jack" key="1">
                黑体
              </Option>
              <Option value="lucy" key="1">
                宋体
              </Option>
            </Select>
          }
        </div>
      </div>
    </div>
  );
};

let mapDispatchProps = (dispatch) =>({
    handleClickSyncScroll: (data)=>{
        dispatch(change_SyncScroll(data))
    },
    handleClickViewMoveCode: (data)=>{
        dispatch(change_ViewMoveCode(data))
    }
})


LeftButton = connect(null, mapDispatchProps)(LeftButton)
export default LeftButton;
