import "./style.css";
import { useData } from "../../utils/const.js";
import MarkdownIt from "markdown-it";
let md = new MarkdownIt({
  linkify: false,
});
let htmls = md.render(useData);

const WriteText = () => {
  return (
    <div className="write-container">
      <div
        dangerouslySetInnerHTML={{ __html: htmls }}
        className="markdown-body"
      />
    </div>
  );
};
export default WriteText;
