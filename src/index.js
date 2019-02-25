import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import thunkMiddleware from "redux-thunk"
import logger from "redux-logger"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"

import App from "./components/App"
import PrivateRoute from "./components/PrivateRoute"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import "./styles/index.scss"

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
