import React, { useEffect, createContext, useReducer, useContext } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Home from "./components/screens/Home";
import Episodes from "./components/screens/Episodes";
import Ep_4 from "./components/screens/Blog_4";
import Ep_2 from "./components/screens/Blog_2";
import Ep_5 from "./components/screens/Blog_5";
import Ep_6 from "./components/screens/Blog_6";
import Ep_7 from "./components/screens/Blog_7";
import Ep_8 from "./components/screens/Blog_8";
import Ep_9 from "./components/screens/Blog_9";
import Ep_10 from "./components/screens/Blog_10";
import Ep_11 from "./components/screens/Blog_11";
import Ep_12 from "./components/screens/Blog_12";
import Rust from "./components/screens/Rust_Sponsor";
import Error from "./components/sections/Error";
import Check from "./components/sections/bcheck";
import AMA from "./components/sections/AMA";
import AMA1 from "./components/sections/AMA1";
import Team from "./components/screens/Team";
import SponsorUs from "./components/screens/Sponsor_us";
import Sponsors from "./components/screens/Sponsors";
import Signin from "./admin/Signin";
import Contact from "./components/sections/Contact";
import { reducer, initialState } from "./reducer/userReducer";

import AdminMenu from "./components/screens/Admin";
import AddAma from "./admin/AddAma";
// import Ama from "./components/sections/Amas/Base";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //if token has

    dispatch({ type: "USER", payload: user });
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/*------------------------------------------------------------*/}
      <Route exact path="/admin">
        <AdminMenu />
      </Route>
      <Route exact path="/create/ama">
        <AddAma />
      </Route>

      {/*-----------------------------------------------------------*/}
      <Route path="/episodes/all">
        <Episodes />
      </Route>
      <Route path="/episodes/ep_2">
        <Ep_2 />
      </Route>
      <Route path="/episodes/ep_4">
        <Ep_4 />
      </Route>
      <Route path="/episodes/ep_5">
        <Ep_5 />
      </Route>
      <Route path="/episodes/ep_6">
        <Ep_6 />
      </Route>
      <Route path="/episodes/ep_7">
        <Ep_7 />
      </Route>
      <Route path="/episodes/ep_8">
        <Ep_8 />
      </Route>
      <Route path="/episodes/ep_9">
        <Ep_9 />
      </Route>
      <Route path="/episodes/ep_10">
        <Ep_10 />
      </Route>
      <Route path="/episodes/ep_11">
        <Ep_11 />
      </Route>
      <Route path="/episodes/ep_12">
        <Ep_12 />
      </Route>
      <Route path="/sponsors/manning">
        <Rust />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/sponsor">
        <SponsorUs />
      </Route>
      <Route path="/sponsors">
        <Sponsors />
      </Route>
      <Route path="/AskBob">
        <AMA />
      </Route>
      <Route path="/AskMauro">
        <AMA1 />
      </Route>
      <Route path="/backend">
        <Check />
      </Route>
      <Route
        path="/newsletter"
        component={() => {
          window.location = "http://eepurl.com/g_FSzP";
          return null;
        }}
      />
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/episodes">
        <Redirect to="/episodes/all" />
      </Route>
      <Route exact path="/ep2">
        <Redirect to="/episodes/ep_2" />
      </Route>
      <Route exact path="/ep4">
        <Redirect to="/episodes/ep_4" />
      </Route>
      <Route exact path="/ep5">
        <Redirect to="/episodes/ep_5" />
      </Route>
      <Route exact path="/ep6">
        <Redirect to="/episodes/ep_6" />
      </Route>
      <Route exact path="/ep7">
        <Redirect to="/episodes/ep_7" />
      </Route>
      <Route exact path="/ep8">
        <Redirect to="/episodes/ep_8" />
      </Route>
      <Route exact path="/ep9">
        <Redirect to="/episodes/ep_9" />
      </Route>
      <Route exact path="/ep10">
        <Redirect to="/episodes/ep_10" />
      </Route>
      <Route exact path="/ep11">
        <Redirect to="/episodes/ep_11" />
      </Route>
      <Route exact path="/ep12">
        <Redirect to="/episodes/ep_12" />
      </Route>
      <Route exact path="/rust">
        <Redirect to="/sponsors/manning" />
      </Route>
      <Route path="*">
        <Error />
      </Route>
      <Route path="/*">
        <Error />
      </Route>
    </Switch>
  );
};

//viewPort

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
