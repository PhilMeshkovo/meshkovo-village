import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './layout/Header'
import {Main} from './components/Main'
import {Sights} from './components/Sights'
import {History} from './components/History'
import {Footer} from './layout/Footer'


function App() {

  return (
    <div className="App">
      <Header />
      <br/>
      <Router basename="/meshkovo-village">
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/sights" component={Sights}/>
            <Route path="/history" component={History}/>
      </Switch>

      </Router>


      <Footer />
    </div>
  );
}

export default App;
