import './index.css'
import './base.css'
import './Component/pageCss/default.css'
import './Component/uils/codemirror-github-light-theme.css'
// import 'antd/dist/antd.css';
import React, { Component } from 'react'
import Main from './Component/Main/Main.js'
import HeaderCommander from './Component/HeaderCommander/index'
import NavDownload from './Component/NavDownload/index'
import data from './Component/base/const'
import LeftView from './Component/LeftView/index'
import ViewDiv from './Component/isView/index'
export default class App extends Component {
  
    /*致命问题 :父组件向子组件传递 state 后者是不能去改变的 但不传递数据又会造成数据不共享，每个组件都无法共享数据
    *数据提升可以改变这一问题但是又造成了虎头蛇尾的局面 还有一点就是利用上git 操作在重构代码的时候可以撤回现在的局面
    *
    */
    // isDownPDF: false,/*是否下载pdf*/
    // height: 0,/*可视区高度*/
    //   htmlString: '' || data,/*初始字符*/
    //   markd: '',/*md-->html存储区*/
    // }
    render() {
      return (
        <div>
          <HeaderCommander />
          <NavDownload />
          <Main />
          <ViewDiv />
        </div>  
      )
    }
  }
