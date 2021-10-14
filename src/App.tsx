import { Redirect, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainApp from "./pages/Body";
import Start from "./pages/Start";
import Stretch from "./pages/Stretch";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Route 
        render = {({location}) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' component={Start} />
              <Route exact path='/app' component={MainApp} />
              <Route exact path='/stretch' component={Stretch} />
              <Redirect to='/'/>
            </Switch>
            </AnimatePresence>
        )}
      />
    </>
  )
};

export default App;
