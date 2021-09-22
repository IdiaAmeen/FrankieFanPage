import logo from "./logo.svg";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./Gallery";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/">
          <img src="https://i.imgur.com/pPASwYh.jpg" id="avi" />
          <p id="greeting">Hello World</p>
          <Link to="/video" id="enter">
            Enter
          </Link>
          <a href="https://instagram.com/_frankiesnape?utm_medium=copy_link">
            instagram
          </a>
          <a href="https://twitter.com/FranklinSnape">twitter</a>
        </Route>
        <Route exact path="/main">
          <Gallery />
        </Route>
        <Route exact path="/video">
          <Video />
        </Route>
      </header>
    </div>
  );
}

export default App;
