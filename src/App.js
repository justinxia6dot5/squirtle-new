import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Member from "./components/Member";
import Members from "./components/Members";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />

        <Route exact path="/" >
          <Redirect to="/about" />
        </Route>

        <Route path="/about">
          <Main />
          <About />
        </Route>
        
        <Route path="/member" component={Member} />

        <Route path="/members" component={Members} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
