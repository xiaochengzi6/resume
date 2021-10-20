import React, { Component } from 'react'
import SplitPane from "react-split-pane"
import LeftView from '../LeftView/index'
import RightWrith from '../RightWrith/index'
// import data from '../base/const'
import { markdownParserResume } from '../../markdownRules/Rules.js'
import '../pageCss/base.css'
import './style.css'

export default class Main extends Component {
    render() {
        return (
            <div className='Main--div'>
                <SplitPane split="vertical" minSize={500} primary='second' >
                    <LeftView
                    />
                    <RightWrith
                    >
                    </RightWrith>
                </SplitPane>
            </div>
        )
    }
}