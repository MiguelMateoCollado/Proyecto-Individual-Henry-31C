import "./Styles/App.css";
import LadingPage from "./Components/LadingPage/LadingPage";
import { Route, Switch } from "react-router-dom";
import Games_Details from "./Components/GameDetails/GamesDetails";
import Games_Create from "./Components/GameCreate/GamesCreate";

import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" exact component={LadingPage} />
        <Route path="/details" component={Games_Details} />
        <Route path="/create" component={Games_Create} />
      </Switch>
    </div>
  );
}

export default App;
