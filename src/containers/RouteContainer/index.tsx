import * as React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import App from "@containers/App";
import AccessLog from "@containers/AccessLog";
import Cars from "@containers/Cars";

// import SingleUserView from "@components/SingleUserView";

class RouteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <div>

          <ul>
            <li><Link to={"/"}>HomePage</Link></li>
          <li><Link to={'/logs'} >Log table</Link></li>
          <li><Link to={'/cars'} >Cars Form</Link></li>
          </ul>

          <Route exact={true} path="/" component={App} />
          <Route path="/logs" component={AccessLog} />
          <Route path="/cars" component={Cars} />
        </div>
      </Router>
    );
  }
}

export default RouteContainer;
