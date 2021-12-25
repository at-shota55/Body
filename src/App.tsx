import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainApp from "./pages/Body/Body";
import Start from "./pages/Startup/Start";
import Stretch from "./pages/Stretch/Stretch";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App  = () => {
  const history = useHistory();

  const goToStretch = ({part, body} : {part: string, body: string}) => {
    history.push(`/stretch/${part}`, {body : body})
  };

  return (
    <div>
      <GlobalStyle />
      <Route 
        render = {({location}) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' component={Start} />
              <Route exact path='/app' component={MainApp}>
                <MainApp goToStretch={({part, body} : {part: string, body: string}) => goToStretch({part, body})} />
              </Route>
              <Route exact path="/stretch/:part" component={Stretch} />
            </Switch>
            </AnimatePresence>
        )}
      />
    </div>
  )
};

export default withRouter(App);
