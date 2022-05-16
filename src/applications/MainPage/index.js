
// 导航栏
import "./style.css";
import printPDF from "../../api/htmlpdf.js";
import { connect } from "react-redux";
import {
  FolderOutlined,
  SyncOutlined,
  FilePdfOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";

// 主体
import SplitPane from "react-split-pane"
import LeftView from '../../Components/LeftView/index.js'
import RightWrith from '../../Components/RightWrith'
import '../../utils/pageCss/base.css'


let MainPage = (props) => {
  let { height } = props;
  let [isDownPdf, setIsDownPdt] = useState(true);

  const handleClick = () => {
    setIsDownPdt(false);
    printPDF(height); // 传入高度
  };
  return (
    <>
      {/* 导航栏逻辑 */}
      <div className="Navdownload">
        <ul className="nav-right--ul-css">
          <li onClick={handleClick}>
            <a href="javascript:">
              {/* 点击下载后 转圈 */}
              {isDownPdf ? <FilePdfOutlined /> : <SyncOutlined spin />} 导出PDF
            </a>
          </li>

          {/* 这里可以扩展一下 */}
          <li>历史记录</li>

          {/* 这里不太合适 需要在修改修改 */}
          <li>{<UploadOutlined />} 上传</li>

          <li>选择主题</li>

          <li>{<FolderOutlined />} 文件</li>
        </ul>
      </div>


      {/* 主题逻辑 */}
      <div className="Main--div">
        <SplitPane split="vertical" minSize={500} primary="second">
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
  height: state.getIn(['leftView', 'leftViewHieht'])
});

MainPage = connect(mapStateProps)(MainPage);
export default MainPage;



