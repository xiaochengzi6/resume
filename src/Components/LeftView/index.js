import React, { useEffect, useRef, useState } from "react";

import "./style.css";
import LeftButton from "../LeftViewButton/index.js";
import { connect } from "react-redux";
import { change_height } from "./store/actionCreate";
import { markdownParserResume } from "../../utils/markdownRules/Rules.js";
// const coverDiv
let LeftView = (props) => {
  // 这里要对 writh 做一个处理
  let {
    changeHeight,
    writh,
    isSyncScroll,
    isViewModeCode,
    right_Client,
    TextArrays,
  } = props;
  const divScroll = useRef(null);
  const htmls = useRef(null);
  let [line, setLine] = useState("");

  let mdToHtml = markdownParserResume.render(writh);

  useEffect(() => {
    const client = document.querySelector(".leftView--div").clientHeight;
    console.log(client);
    changeHeight(Number(client));
  }, [writh]);

  // 同步滚动
  useEffect(() => {
    if (isSyncScroll) {
      /*view盒子的scrollTop会跟随编辑区盒子的scrollTop成比例移动*/
      const { height } = right_Client;
      let viewBoxHeight =
        divScroll.current.children[0].getBoundingClientRect().height;
      const RightWrithDIV = document.querySelector(".CodeMirror-scroll");


       // todo 左边动 右随动
      let currentTop;
      const onScrollView = () => {
        // 每次滚动的 大小
        console.log('currentTop',currentTop, height)
        currentTop = Math.round(divScroll.current.scrollTop);
        RightWrithDIV.scrollTop = Math.round(
          currentTop * ((height + 100) / viewBoxHeight)
        );
      };
      divScroll.current.addEventListener("scroll", onScrollView);

      // todo 右边动 左随动
      // divScroll.current.scrollTop = Math.round(
      //   top * ((viewBoxHeight + 150) / height)
      // );
      return () => {
        if(divScroll.current){
          divScroll.current.removeEventListener("scroll", onScrollView);
        }
      };
    }
  }, [isSyncScroll]);

  // 可视化
  useEffect(() => {
    const coverDiv = document.querySelector(".cover-div");
    // 获取右边编辑页面
    // const CodeMirror_code_ChildNode = document.querySelector(".CodeMirror-code");
    if (isViewModeCode &&  htmls.current) {
      htmls.current.addEventListener("mouseover", bindMouseover);
      htmls.current.addEventListener("mouseleave", mouseLeave);
    }

    divScroll.current.addEventListener("scroll", mouseLeave);
    function mouseLeave() {
      if (coverDiv && coverDiv.style) {
        coverDiv.style.border = 0;
        coverDiv.style.color = "#fff";
      }
    }
    function bindMouseover(e) {
      let length = e.target.children.length;
      if (length === 0 && isViewModeCode) {
        const coverDiv = document.querySelector(".cover-div");

        if (coverDiv) {
          /*找到其value然后和编辑器对比*/
          let valueText = e.srcElement.innerText;
          let number = TextArrays.indexOf(valueText, 0);
          if (number === -1) {
            setLine("");
          } else {
            setLine(number + 1);
            // 这里显示不出来 有问题
            // displayDiv = CodeMirror_code_ChildNode.childNodes[number]
            // if(displayDiv && displayDiv.style){
            //   displayDiv.style.backgroundColor = 'red'
            // }else{
            //   console.log(CodeMirror_code_ChildNode.childNodes)
            // }
          }
          // ---------------------

          // ---------------------
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
    console.log("组件加载");
    // 组件卸载也会取消副作用
    return () => {
      if (!isSyncScroll && htmls.current) {
        console.log("组件卸载");
        htmls.current.removeEventListener("mouseover", bindMouseover);
        htmls.current.removeEventListener("mouseleave", mouseLeave);
        divScroll.current.removeEventListener("scroll", mouseLeave);
      }
    };
  }, [isViewModeCode]);
  useEffect(() => {});
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
      {isViewModeCode ? divBox : null}
    </>
  );
};

const mapStateProps = (state) => {
  // 获得改变的 md 值
  return {
    // writh: state.RightDate.marked,
    writh: state.getIn(['RightDate', 'marked']),
    // 同步滚动
    // isSyncScroll: state.LiftButton.isSyncScroll,
    isSyncScroll: state.getIn(['LiftButton', 'isSyncScroll']),
    // 可视化
    // isViewModeCode: state.LiftButton.isViewModeCode,
    isViewModeCode: state.getIn(['LiftButton', 'isViewModeCode']),
    // 获得编辑区域的高度
    right_Client: {
      // height: state.RightDate.height,
      height: state.getIn(['RightDate', 'height']),
      // top: state.RightDate.top,
      // top: state.getIn(['RightDate', 'top']),
    },
    // 获得 Array文字值
    // TextArrays: state.RightDate.textArrays,
    TextArrays: state.getIn(['RightDate', 'textArrays']),

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

LeftView = connect(mapStateProps, mapDispatchProps)(React.memo(LeftView));
export default LeftView;
