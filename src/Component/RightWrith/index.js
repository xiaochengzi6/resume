import React, { useEffect, useRef } from 'react'
import './stale.css'
import CodeMirror from "@uiw/react-codemirror";
import { debounce } from 'lodash';
import { writhMd, tansfromMH, ChangeRightScrollHeight, GetTextArray } from '../../redux/actionFunction'
import { connect } from 'react-redux'
import basedata from '../base/const'
import { markdownParserResume } from '../../markdownRules/Rules.js'

let pattern = /-|#* |`*/
let tss = /-*/

/**
 *接收 md 转换为 html 
 *
 * @param {*} { data, changeMD, changeHTML }
 * @return {*} 
 */
let RightWrith = ({ data, changeMD, changeHTML, changeScrollHeight, GetArrayText }) => {
    const codeRef = useRef(null)
    /*初始data*/
    if (!data) {
        changeMD(basedata)
    }
    /*刷新*/
    useEffect(() => {
        let md = markdownParserResume.render(data)
        changeHTML(md)
    })
    /*获取dom节点*/
    useEffect(() => {
       let text = []
        setTimeout(() => {
            let docs = codeRef.current.editor.doc
            for (let i = 0; i < docs.children.length; i++) {
                /*0-3*/
                for (let j = 0; j < docs.children[i].lines.length; j++) {
                    /*0-25*/
                    text.push(docs.children[i].lines[j].text.replace(pattern,'').trim().replace(tss,'').trim())
                }
            }
            GetArrayText(text)/*保存textArray 如果组件更新需要重新保存*/
        }, 0)
    })
    return (
        <div className="RightWrith--div">
            <CodeMirror
                value={data}
                ref={codeRef}
                options={{
                    theme: "github-light",/*指定主题*/
                    mode: "markdown",
                    lineWrapping: true,
                    extraKeys: {},
                }}
                
                onChange={
                    debounce((editor) => {
                        changeMD(editor.getValue())/*创建函数 改变就会调用*/
                    }, 300)}

                onScroll={
                    (e) => {
                        // console.log('1', e.lineInfo(17))
                        // console.log('doc1', e.getDoc().children[0].lines[1]['text'])
                        // console.log('doc2', e.getDoc().children[1])
                        let top = Math.round(e.getScrollInfo().top)
                        let height = Math.round(e.getScrollInfo().height)
                        changeScrollHeight(top, height)
                    }
                }
            >
            </CodeMirror>
        </div>
    )
}
// CodeMirror.
const mapStateProps = (state, ownProps) => {
    //ownProps 是容器组件接收的参数这里不需要
    return {
        data: state.rightWrith_markd
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return {
        changeMD: (mark) => {
            dispatch(writhMd(mark))
        },
        changeHTML: (htmls) => {
            dispatch(tansfromMH(htmls))
        },
        changeScrollHeight: (top, height) => {
            dispatch(ChangeRightScrollHeight(top, height))
        },
        GetArrayText: (text) => {
            dispatch(GetTextArray(text))
        }
    }
}
RightWrith = connect(
    mapStateProps,
    mapDispatchProps
)(RightWrith)
export default RightWrith
