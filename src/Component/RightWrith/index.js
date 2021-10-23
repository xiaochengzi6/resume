import React, { useEffect,useRef } from 'react'
import './stale.css'
import CodeMirror from "@uiw/react-codemirror";
import { debounce } from 'lodash';
import { writhMd, tansfromMH, ChangeRightScrollHeight } from '../../redux/actionFunction'
import { connect } from 'react-redux'
import basedata from '../base/const'
import { markdownParserResume } from '../../markdownRules/Rules.js'
/**
 *接收 md 转换为 html 
 *
 * @param {*} { data, changeMD, changeHTML }
 * @return {*} 
 */
/*保存text*/
let text = []
let RightWrith = ({ data, changeMD, changeHTML, changeScrollHeight }) => {
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
        // console.log("codeRef",codeRef)
        setTimeout(()=>{
        let docs = codeRef.current.editor.doc
        // console.log('docs:',docs)
            for(let i = 0; i<docs.children.length;i++){
                /*0-3*/
                console.log(docs.children[i].lines.length)
                for(let j = 0; j < docs.children[i].lines.length; j++){
                    /*0-25*/
                    // console.log('value',docs.children[i].lines[j])
                    text.push(docs.children[i].lines[j].text)
                }
            }
        console.log("text",text.length)
        
        },0)
    })
    return (
        <div className="RightWrith--div">
            <CodeMirror
                value={data}
                options={{
                    theme: "github-light",/*指定主题*/
                    mode: "markdown",
                    lineWrapping: true,
                    // lineNumbers: false,/*显示行数*/
                    extraKeys: {},
                    // lineNumberFormatter(13)
                }}
                ref={codeRef}
                onChange={
                    debounce((editor) => {
                        changeMD(editor.getValue())/*创建函数 改变就会调用*/
                    }, 300)}
                
                onScroll={
                    (e) => {
                        console.log('1',e.lineInfo(17))
                        console.log('doc1',e.getDoc().children[0].lines[1]['text'])
                        console.log('doc2',e.getDoc().children[1])
                        // operation(()=>{})
                        // lineNumberFormatter 
                        // e.addLineWidget(2,HTMLElement)
                        let top= Math.round(e.getScrollInfo().top)
                        let height= Math.round(e.getScrollInfo().height)
                        changeScrollHeight(top,height)
                        // console.log('addLineClass',e.lineNumberFormatter(17))
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
        }
    }
}
RightWrith = connect(
    mapStateProps,
    mapDispatchProps
)(RightWrith)
export default RightWrith
