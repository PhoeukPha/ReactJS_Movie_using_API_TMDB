import './App.css';
import Navigation from './components/inc/navigation'
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/homePage';
import FilterPage from './components/pages/filterPage';
import DetailPage from './components/pages/detail';


function App() {

  return (
    <div className='container'>
      <Navigation />
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route exact path='/filter' Component={FilterPage} />
        <Route exact path='/movie/:id' Component={DetailPage} />
      </Routes>
    </div>
  );
}

export default App;
