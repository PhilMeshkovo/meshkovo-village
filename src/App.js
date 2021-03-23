import React,{useState, useEffect} from 'react'
import {Header} from './layout/Header'
import {Main} from './components/Main'
import {Sights} from './components/Sights'
import {History} from './components/History'


function App() {
const [view, setView] = useState('main')

if(view === 'main') {
  return (
    <div className="App">
      <Header />
      <br/>
      <Main view={view} setView={(props) => setView(props)}/>
    </div>
  );
} 
if(view === 'sights') {

  return (
    <div className="App">
      <Header />
      <br/>
      <Sights setView={(props) => setView(props)}/>
    </div>
  );
} 
if(view === 'history') {

  return (
    <div className="App">
      <Header />
      <br/>
      <History setView={(props) => setView(props)}/>
    </div>
  );
} 
 
}

export default App;
