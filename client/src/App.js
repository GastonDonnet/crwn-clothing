import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "./global.styles";
// import HomePage from "./pages/Home/Home";
// import Shop from "./pages/Shop/Shop";
// import Checkout from "./pages/Checkout/Checkout";
// import { Authentification } from "./pages/Authentification/Authentification";
import Header from "./components/Header/Header";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const HomePage = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Authentification = lazy(() =>
  import("./pages/Authentification/Authentification")
);

const App = ({ dispatch, currentUser }) => {
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <Authentification />
              }
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
