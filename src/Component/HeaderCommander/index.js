import React from "react";
// import './style.css'
import { Link } from "react-router-dom";
export default class HeaderCommander extends React.Component {
  constuctor() {
    console.log("Header");
  }
  render() {
    return (
      <div className="Header-fbox">
        <div className="Header-icon">
          <h1 className="Header-theme">
            <Link to="/">在线简历</Link>
          </h1>
        </div>
        <div className="Header-menu">
          <ul className="Header-menu--ul">
            <li>
              <Link to="/moreTemplate">更多模板</Link>
            </li>
            <li>
              <Link to="useCourse">使用教程</Link>
            </li>
            <li>
              <Link to="writreTxt">如何写xx</Link>
            </li>
            <li>关于我</li>
          </ul>
        </div>
      </div>
    );
  }
}
