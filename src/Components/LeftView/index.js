import React, { useEffect, useRef, useState } from "react";

import "./style.css";
import LeftButton from "../LeftViewButton/index.js";
import { connect } from "react-redux";
import { change_height } from "./store/actionCreate";
import { markdownParserResume } from "../../utils/markdownRules/Rules.js";

let LeftView = (props) => {
  // 这里要对 writh 做一个处理
  let { changeHeight, writh, isSyncScroll, isViewModeCode, right_Client, TextArrays } =
    props;
  const divScroll = useRef(null);
  const htmls = useRef(null);
  let [line, setLine] = useState('')
  // ---------------修改
  let mdToHtml = markdownParserResume.render(writh);
  // ---------------结束
  useEffect(() => {
    const client = document.querySelector(".leftView--div").clientHeight;
    changeHeight(Number(client));
  }, [writh]);

  // 同步滚动
  useEffect(() => {
    if (isSyncScroll) {
      /*view盒子的scrollTop会跟随编辑区盒子的scrollTop成比例移动*/
      const { top, height } = right_Client;
      let viewBoxHeight =
        divScroll.current.children[0].getBoundingClientRect().height;
      console.log("viewBoxHeight", viewBoxHeight);
      divScroll.current.scrollTop = Math.round(
        top * ((viewBoxHeight + 150) / height)
      );
    }
  }, [isSyncScroll, right_Client]);

  // 可视化
  useEffect(() => {
    if (isViewModeCode) {
      htmls.current.addEventListener("mouseover", bindMouseover);
      htmls.current.addEventListener("mouseleave", mouseLeave);
    } else {
      htmls.current.removeEventListener("mouseover", bindMouseover);
      htmls.current.removeEventListener("mouseleave", mouseLeave);
    }

    function mouseLeave() {
      const coverDiv = document.querySelector(".cover-div");
      if (coverDiv) {
        coverDiv.style.border = 0;
        coverDiv.style.color = "#fff";
      }
    }
    function bindMouseover(e) {
      let length = e.target.children.length;
      if (length === 0 && isViewModeCode) {
        const coverDiv = document.querySelector(".cover-div");
        if (coverDiv) {
          let valueText = e.srcElement.innerText; /*找到其value然后和编辑器对比*/
          let number = TextArrays.indexOf(valueText, 0);
          if (number === -1) {
            setLine("");
          } else {
            setLine(number + 1);
          }

          let width = e.srcElement.clientWidth,
            screenX = e.srcElement.offsetLeft,
            screenY = e.srcElement.offsetTop - divScroll.current.scrollTop,
            heigth = e.srcElement.clientHeight;
          coverDiv.style.border = "1px dashed rgb(218, 63, 202)";
          coverDiv.style.color = "#111";
          coverDiv.style.height = heigth + "px";
          coverDiv.style.width = width + "px";
          coverDiv.style.top = screenY + "px";
          coverDiv.style.left = screenX + "px";
        }
      }
    }
  });

  const divBox = (
    <div className="cover-div">
      <span>{line}</span>
    </div>
  );
  return (
    <>
      <LeftButton />
      <div className="leftView" ref={divScroll}>
        <div className="leftView--div">
          <div
            dangerouslySetInnerHTML={{ __html: mdToHtml }}
            className="nn"
            ref={htmls}
          />
        </div>
      </div>
      { isViewModeCode ? divBox : null}
    </>
  );
};

const mapStateProps = (state) => {
  // 获得改变的 md 值
  return {
    writh: state.RightDate.marked,
    // 同步滚动
    isSyncScroll: state.LiftButton.isSyncScroll,
    // 可视化
    isViewModeCode: state.LiftButton.isViewModeCode,
    // 获得编辑区域的高度
    right_Client: {
      height: state.RightDate.height,
      top: state.RightDate.top,
    },
    // 获得 Array文字值
    TextArrays: state.RightDate.textArrays
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    // 改变页面的高度
    changeHeight: (data) => {
      dispatch(change_height(data));
    },
  };
};

LeftView = connect(mapStateProps, mapDispatchProps)(LeftView);
export default LeftView;
