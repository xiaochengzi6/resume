import './style.css'
import '../uils/github-markdown-css/github-markdown.css'
import {useData} from '../base/const'
import MarkdownIt from "markdown-it";

let md = new MarkdownIt({
    linkify: false
})
let htmls = md.render(useData)

const WriteText = () => {

    return(
        <div className="write-container">
            <div dangerouslySetInnerHTML={{ __html: htmls }} className="markdown-body"/>
        </div>
    )
}
export default WriteText