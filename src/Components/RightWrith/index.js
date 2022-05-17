import React, { useEffect, useRef, useContext } from "react";
import "./stale.css";
import CodeMirror from "@uiw/react-codemirror";
// 这里使用了lodsh 有点大到时候看看换一个小的
import { debounce } from "lodash";
// context
import {
  PageButtonContext,
  CHANGEPAGEBUTTONMARKED,
  CHANGEPAGEBUTTONFIRST,
  CHANGEPAGEBUTTONLAST,
  CHANGEPAGEBUTTONRESELT,
  CHANGEPAGEBUTTONDISPATCH,
} from "./PageButton";

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
let data = basedata;
// 接收 md 转换为 html
let RightWrith = (props) => {
  let { changeMD, changeScrollHeight, GetArrayText, GerCodeDivRef } = props;

  // 用于判断页面缓存
  const { ContextData, dispatch } = useContext(PageButtonContext);
  const { Pagebutton, marked } = ContextData.toJS();

  if(marked != ''){
    data = marked
  }

  const codeRef = useRef(null);

  useEffect(() => {
      // 保存 ref
      if(codeRef){
        GerCodeDivRef(codeRef);
        setTimeout(() => {
          let obj = {
            height: codeRef.current.editor.doc.height,
          };
          changeScrollHeight(obj);
        });
      }
  }, []);

  function getRightCodeTextArrs(editor) {
    let text = [];
    // if (!codeRef) return;
    // let docs = codeRef.current.editor.doc;
    let docs = editor.doc;
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
  }
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
          let value = editor.getValue()
            // 这里是每一次改动都要重新获取所有数据 并保存在 数据中

            // todo 这两个换个位置就会产生 BUG　左侧页面不会动态刷新
            dispatch({type: CHANGEPAGEBUTTONMARKED, data: value})
            changeMD(value);
           
            // 获得文字的修改数组
            getRightCodeTextArrs(editor);
        }, 300)}

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
RightWrith = connect(null, mapDispatchProps)(React.memo(RightWrith));
export default RightWrith;
