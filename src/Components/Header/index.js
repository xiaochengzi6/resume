import './style.css'
import { NavLink } from "react-router-dom";
export default function Home () {
    return (
      <div className="Header-fbox">
        <div className="Header-icon">
          <h1 className="Header-theme">
            <NavLink to="/MainPage">在线简历</NavLink>
          </h1>
        </div>
        <div className="Header-menu">
          <ul className="Header-menu--ul">
            {/* 后期增加 */}
            {/* <li>
              <NavLink to="/moreTemplate">更多模板</NavLink>
            </li> */}
            <li>
              <NavLink to="/useCourse">使用教程</NavLink>
            </li>
            <li>
              <NavLink to="/WritePage">如何写简历</NavLink>
            </li>
            <li>关于我</li>
          </ul>
        </div>
      </div>
    );
}
