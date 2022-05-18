import "../useCourse/style.css";
import "../../utils/pageCss/base.css";
import { useResume } from "../../utils/const.js";
import { markdownParserResume } from "../../utils/markdownRules/Rules.js";
let mdToHtml = markdownParserResume.render(useResume);
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
