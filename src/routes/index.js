import Home from "../applications/Home/index.js";
import MainPage from '../applications/MainPage/index.js'
import MoreTemplate from "../applications/MoreTemplate/index.js";
import useCourse from "../applications/useCourse/index.js";
import WritePage from "../applications/WritePage/index.js";
import FromMe from "../applications/FromMe/index.js";

import {Redirect} from 'react-router'
export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: ()=>{
          <Redirect to = {"/MainPage"}/>
        }
      },
      {
        // 编写
        path: '/MainPage',
        component: MainPage
      },
      {
        // 如何使用
        path: "/useCourse",
        component: useCourse,
      },
      {
        // 写作技巧ss
        path: "/WritePage",
        component: WritePage,
      },
      {
        // 关于我
        path: "/FromMe",
        component: FromMe,
      },
      {
        // 更多模板
        path: "/moreTemplate",
        component: MoreTemplate,
      },
    ],
  },
];
