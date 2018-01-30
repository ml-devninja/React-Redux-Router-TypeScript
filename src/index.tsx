import * as React from "react";
import * as ReactDOM from "react-dom";
import RouteContainer from "@containers/RouteContainer";

import setupReducers from './store/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(setupReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(<Provider store={store}><RouteContainer /></Provider>, document.getElementById(
  "root"
) as HTMLElement);


