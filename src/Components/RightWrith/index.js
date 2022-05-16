import React, { useEffect, useRef } from "react";
import "./stale.css";
import CodeMirror from "@uiw/react-codemirror";
// 这里使用了lodsh 有点大到时候看看换一个小的
import { debounce } from "lodash";
import {
  change_markd,
  change_ScrollHeightTop,
  change_GerTextArrays,
  change_CodeDivRef,
} from "./store/actionCreate";
import { connect } from "react-redux";
import basedata from "../../utils/const.js";

let pattern = /-|#* |`*/;
let tss = /-*/;

// 最初数据 这里可以做出修改保存或者取出浏览器中记录的
let data = basedata;

// 接收 md 转换为 html
let RightWrith = (props) => {
  let { changeMD, changeScrollHeight, GetArrayText, GerCodeDivRef } = props;

  const codeRef = useRef(null);
  changeMD(basedata);
  useEffect(() => {
    // 保存 ref
    GerCodeDivRef(codeRef);
    setTimeout(() => {
        console.log("height", codeRef.current.editor.doc.height);
      let obj = {
        height: codeRef.current.editor.doc.height,
        top: 0,
      };
      changeScrollHeight(obj);
    }, 300);
  }, []);
  /*获取dom节点*/
  useEffect(() => {
    let text = [];
    setTimeout(() => {
      if (!codeRef) return;
      let docs = codeRef.current.editor.doc;
      for (let i = 0; i < docs.children.length; i++) {
        /*0-3*/
        for (let j = 0; j < docs.children[i].lines.length; j++) {
          /*0-25*/
          text.push(
            docs.children[i].lines[j].text
              .replace(pattern, "")
              .trim()
              .replace(tss, "")
              .trim()
          );
        }
      }
      /*这里是用来做可视化的 保存textArray 如果组件更新需要重新保存*/
      GetArrayText(text);
    }, 300);
  });
  return (
    <div className="RightWrith--div">
      <CodeMirror
        value={data}
        ref={codeRef}
        options={{
          theme: "github-light" /*指定主题*/,
          mode: "markdown",
          // lineWrapping: true,
          extraKeys: {},
        }}
        onChange={debounce((editor) => {
          // 这里是每一次改动都要重新获取所有数据 并保存在 数据中
          changeMD(editor.getValue());
        }, 300)}
        // todo 右动 左随动
        // onScroll={(e) => {
        //   // 考虑使用 防抖
        //   // 这里每一次滚动都要获得它距离屏幕上部的位置和距离下边的位置
        //   let value = {
        //     top: Math.round(e.getScrollInfo().top),
        //     height: Math.round(e.getScrollInfo().height),
        //   };
        //   changeScrollHeight(value);
        // }}
      ></CodeMirror>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    // 两页面之间的互动所需要的数据
    changeMD: (data) => {
      dispatch(change_markd(data));
    },
    // 同步滚动所需要的数据
    changeScrollHeight: (data) => {
      dispatch(change_ScrollHeightTop(data));
    },
    // 可视化所需要的数据
    GetArrayText: (data) => {
      dispatch(change_GerTextArrays(data));
    },

    // 获得渲染 ref
    GerCodeDivRef: (data) => {
      dispatch(change_CodeDivRef(data));
    },
  };
};
RightWrith = connect(null, mapDispatchProps)(RightWrith);
export default RightWrith;
