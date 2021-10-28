import 'antd/dist/antd.css'
import './index.css'
import './base.css'
import './Component/pageCss/default.css'
import './Component/uils/codemirror-github-light-theme.css'
import './Component/HeaderCommander/style.css'
import './App.css'

import React, { Component } from 'react'
import Main from './Component/Main/Main'
import HeaderCommander from './Component/HeaderCommander/index'
import NavDownload from './Component/NavDownload/index'
import WriteText from './Component/WriteText/index'
import ViewDiv from './Component/isView/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const App = () => {



  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <HeaderCommander />
            <NavDownload />
            <Main />
            <ViewDiv />
          </Route>
          <Route path="/useCourse" >
            <HeaderCommander />
            <div className="m-bady">
              <WriteText />
            </div>
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  )

}
export default App