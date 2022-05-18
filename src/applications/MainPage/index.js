// 导航栏
import "./style.css";
import printPDF from "../../api/htmlpdf.js";
import { connect } from "react-redux";
import { myResume } from "../../utils/const";
import {
  FolderOutlined,
  SyncOutlined,
  FilePdfOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect, useContext } from "react";
import { Button, notification } from "antd";
import { change_markd } from "../../Components/RightWrith/store/actionCreate";
import { changeSetmarkdToUpdata } from "./store/actionCreators.js";
// 主体
import SplitPane from "react-split-pane";
import LeftView from "../../Components/LeftView/index.js";
import RightWrith from "../../Components/RightWrith";
import {
  PageButtonContext,
  CHANGEPAGEBUTTONMARKED,
} from "../../Components/RightWrith/PageButton";
import "../../utils/pageCss/base.css";
// button 样式
const buttonStyle = { background: "#f7f1e3", border: "none", color: "#606060" };
let MainPage = (props) => {
  let { height, RightMarked, changeClrean } = props;
  let { changeUpdateMarker, changeStateMarked } = props;
  let [isDownPdf, setIsDownPdt] = useState(true);

  // 用于判断页面缓存
  const { ContextData, dispatch } = useContext(PageButtonContext);
  const { marked } = ContextData.toJS();

  // 保存的逻辑
  const handlePreservation = () => {
    let doc = RightMarked;
    localStorage.setItem("resume-doc", doc);
    if (changeStateMarked) {
      changeUpdateMarker(false);
    }
    notification["success"]({
      message: "保存成功",
      description: "保存功能不会记录你的个人隐私请放心使用！",
      placement: "topLeft",
      duration: 2.5,
    });
  };
  // 清空
  const handleClearn = () => {
    if (localStorage.getItem("resume-doc") && !changeStateMarked) {
      localStorage.removeItem("resume-doc");

      // 至少发出一次 dispatch
      changeClrean(myResume);
      // 组件产生了一次更新
      changeUpdateMarker(true);

      dispatch({type: CHANGEPAGEBUTTONMARKED, data: ''})
    } else {
      // 这里显示 需要保存一次的值才能被还原清空
      notification["warning"]({
        message: "清除失败",
        description: "你应该需要点击保存后还原默认才能生效",
        duration: 2.5,
        placement: "bottomRight",
      });
    }
  };

  useEffect(() => {
    if (!isDownPdf) {
      setTimeout(() => {
        setIsDownPdt(true);
      }, 3000);
    }
  }, [isDownPdf]);

  const handleClick = () => {
    notification["success"]({
      message: "正在下载中...",
      description: "简历生成不会通过任何方式记录你的个人信息请放心使用！",
      duration: 3,
    });
    setIsDownPdt(false);
    printPDF(height); // 传入高度
  };

  return (
    <>
      {/* 导航栏逻辑 */}
      <div className="Navdownload">
        <ul className="nav-right--ul-css">
          <li>
            <Button type="primary" onClick={handleClick} style={buttonStyle}>
              {isDownPdf ? <FilePdfOutlined /> : <SyncOutlined spin />} 导出PDF
            </Button>
          </li>

          {/* 这里可以扩展一下 */}
          <li>
            <Button type="primary" onClick={handleClearn} style={buttonStyle}>
              还原默认
            </Button>
            {/* <a href="javascript:">还原默认</a> */}
          </li>

          {/* 这里不太合适 需要在修改修改 */}
          <li>
            <Button
              type="primary"
              onClick={handlePreservation}
              style={buttonStyle}
            >
              <UploadOutlined /> 保存
            </Button>
          </li>

          {/* <li>选择主题</li> */}
          {/* <li>{<FolderOutlined />} 文件</li> */}
        </ul>
      </div>

      {/* 主题逻辑 */}
      <div className="Main--div">
        <SplitPane split="vertical" minSize={480} primary="second">
          {/* 展示页面 */}
          <LeftView />
          {/* 编辑页面 */}
          <RightWrith />
        </SplitPane>
      </div>
    </>
  );
};

const mapStateProps = (state) => ({
  // height: state.leftView.leftViewHieht
  height: state.getIn(["leftView", "leftViewHieht"]),
  RightMarked: state.getIn(["RightDate", "marked"]),
  changeStateMarked: state.getIn(["MainPage", "updataMarked"]),
});

const mapDispatchProps = (dispatch) => ({
  changeClrean: (data) => {
    dispatch(change_markd(data));
  },
  changeUpdateMarker: (data) => {
    dispatch(changeSetmarkdToUpdata(data));
  },
});

MainPage = connect(mapStateProps, mapDispatchProps)(React.memo(MainPage));
export default MainPage;
