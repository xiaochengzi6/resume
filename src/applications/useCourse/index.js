import "./style.css";
import "../../utils/pageCss/base.css";
import { useData } from "../../utils/const.js";
import { markdownParserResume } from "../../utils/markdownRules/Rules.js";
import React, { useLayoutEffect,useEffect } from 'react'
let mdToHtml = markdownParserResume.render(useData);
console.log('重新渲染')
export default function WritePage() {

  return (
    <div>
      <div className="m-bady">
        <div className="write-container">
          <div className="markdown-body">
            <div
              className="leftView--div"
              dangerouslySetInnerHTML={{ __html: mdToHtml }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
