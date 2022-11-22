import "./Styles/App.css";
import LadingPage from "./Components/LadingPage/LadingPage";
import { Route, Switch } from "react-router-dom";
import GamesDetails from "./Components/GamesDetails/GamesDetails";
import GamesCreate from "./Components/GameCreate/GamesCreate";

import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home/:id" component={GamesDetails}>
    
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={LadingPage} />
        <Route path="/create" component={GamesCreate} />
      </Switch>
    </div>
  );
}

export default App;
