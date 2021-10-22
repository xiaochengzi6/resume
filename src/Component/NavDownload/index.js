import React, { useEffect } from 'react'
import './style.css'
import printPDF from '../htmlpdf/index.js'
import {isDownPdf} from '../../redux/actionFunction'
import {connect} from 'react-redux'
import {FolderOutlined, SyncOutlined,FilePdfOutlined,UploadOutlined} from '@ant-design/icons'
let NavDownload = ({markd, isboo, height}) => {

    const handleClick = () => {
        isboo()
        printPDF(height) 
    }
    return (
        <div className="Navdownload">
            <ul className="nav-right--ul-css">
                { markd ?  <li onClick={handleClick}><a href="javascript:">{<FilePdfOutlined />} 导出PDF</a></li>:<li> {<SyncOutlined spin />}导出PDF</li>}
                <li>历史记录</li>
                <li>{<UploadOutlined />} 上传</li>
                <li>选择主题</li>
                <li>{<FolderOutlined />} 文件</li>
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