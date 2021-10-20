import React, { useEffect } from 'react'
import './stale.css'
import CodeMirror from "@uiw/react-codemirror";
import { debounce } from 'lodash';
import { writhMd, tansfromMH } from '../../redux/actionFunction'
import { connect } from 'react-redux'
import basedata from '../base/const'
import { markdownParserResume } from '../../markdownRules/Rules.js'
/**
 *接收 md 转换为 html 
 *
 * @param {*} { data, changeMD, changeHTML }
 * @return {*} 
 */
let RightWrith = ({ data, changeMD, changeHTML }) => {

    /*初始data*/
    if (!data) {
        changeMD(basedata)
    }
    /*刷新*/
    useEffect(() => {
        let md = markdownParserResume.render(data)
        changeHTML(md)
    })
    return (
        <div className="RightWrith--div">
            <CodeMirror
                value={data}
                options={{
                    theme: "github-light",/*指定主题*/
                    mode: "markdown",
                    lineWrapping: true,
                    lineNumbers: false,/*显示行数*/
                    extraKeys: {},
                }}

                onChange={debounce((editor) => {
                    changeMD(editor.getValue())/*创建函数 改变就会调用*/
                }, 300)}
            >
            </CodeMirror>
        </div>
    )
}

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
        }
    }
}
RightWrith = connect(
    mapStateProps,
    mapDispatchProps
)(RightWrith)
export default RightWrith
