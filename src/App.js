import "antd/dist/antd.css";
import "./baseUI/base.css";
import "./baseUI/App.css";
import { Provider } from "react-redux";
import store from "./store/index.js";

import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/index.js";
import { PageButtonComponent } from "./Components/RightWrith/PageButton";
const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <PageButtonComponent>{renderRoutes(routes)}</PageButtonComponent>
      </HashRouter>
    </Provider>
  );
};
export default App;