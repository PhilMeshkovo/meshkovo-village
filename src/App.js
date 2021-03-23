import React,{useState, useEffect} from 'react'
import {Header} from './layout/Header'
import {Main} from './components/Main'
import {Sights} from './components/Sights'
import {History} from './components/History'


function App() {
const [view, setView] = useState('main')

const setNewView = (props) => {
  setView(props);
} 

if(view === 'main') {
  return (
    <div className="App">
      <Header />
      <br/>
      <Main view={view} setView={(props) => setNewView(props)}/>
    </div>
  );
} 
if(view === 'sights') {

  return (
    <div className="App">
      <Header />
      <br/>
      <Sights setView={(props) => setNewView(props)}/>
    </div>
  );
} 
if(view === 'history') {

  return (
    <div className="App">
      <Header />
      <br/>
      <History setView={(props) => setNewView(props)}/>
    </div>
  );
} 
 
}

export default App;
