import 'antd/dist/antd.css'
import './baseUI/base.css'
import './baseUI/App.css'

import { HashRouter } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import routes from './routes/index.js'

const App = () => {
  return (
    <div>
      <HashRouter>
      {renderRoutes(routes)}
      </HashRouter>
    </div>
  )
}
export default App