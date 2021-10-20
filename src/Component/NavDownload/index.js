import React, { useEffect } from 'react'
import './style.css'
import printPDF from '../htmlpdf/index.js'
import {isDownPdf} from '../../redux/actionFunction'
import {connect} from 'react-redux'
let NavDownload = ({markd, isboo, height}) => {

    const handleClick = () => {
        isboo()
        console.log('下载：',height)
        printPDF(height) 
    }
    return (
        <div className="Navdownload">
            <ul className="Nav--ul">
                { markd ?  <li onClick={handleClick}><a href="javascript:">导出PDF</a></li>:<li>导出PDF</li>}
                <li>历史记录</li>
                <li>上传</li>
                <li>选择主题</li>
                <li>文件</li>
            </ul>
        </div>
    )
}
const mapStateProps = (state, ownProps) => {
    return{
        markd: state.rightWrith_htmlString,
        height: state.leftView_height
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return{
        isboo: () => {
            dispatch(isDownPdf())
        }
    }
}
NavDownload = connect(
    mapStateProps,
    mapDispatchProps
    )(NavDownload)
export default NavDownload