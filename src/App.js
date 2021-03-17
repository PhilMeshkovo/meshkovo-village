import {React} from 'react'
import {Header} from './layout/Header'
import {Sights} from './components/Sights'
import {Main} from './components/Main'
import {History} from './components/History'


function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <Main />
        {/* <Sights /> */}
        {/* <History /> */}
    </div>
  );
}

export default App;
