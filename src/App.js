import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Apropos from './Apropos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './Contact';
import Projets from './Projets';
import Travaux from './Travaux';

function App() {
  return (
    <Router>
      <div>
     <Navbar/>
     <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Apropos" component={Apropos}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/Projets" exact component={Projets}></Route>
      <Route path="/Projets/:id" exact component={Travaux}></Route>
     </Switch>
     </div>
    </Router>
  );
}

export default App;
