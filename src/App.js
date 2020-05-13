import React from 'react';
import './App.css';
import Presentation from './Presentation';
import Navbar from './Navbar';
import Apropos from './Apropos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './Contact';
import Projets from './Projets';

function App() {
  return (
    <Router>
      <div>
     <Navbar/>
     <Switch>
      <Route path="/" exact component={Presentation}></Route>
      <Route path="/Apropos" component={Apropos}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/Projets" exact component={Projets}></Route>
     </Switch>
     </div>
    </Router>
  );
}

export default App;
