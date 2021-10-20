import React, { Component } from 'react'
import './style.css'
export default class HeaderCommander extends React.Component {
    constuctor() {
        
        console.log('Header')

    }
    render() {
        return (
            <div className="Header-fbox">
                <div className="Header-icon">
                    <h1 className="Header-theme">在线简历</h1>
                </div>
                <div className="Header-menu">
                    <ul className="Header-menu--ul">
                        <li>更多模板</li>
                        <li>使用教程</li>
                        <li>如何写xx</li>
                        <li>关于我</li>
                    </ul>
                </div>
            </div>
        )
    }
}
