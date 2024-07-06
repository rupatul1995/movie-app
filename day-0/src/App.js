import { Route, Routes } from 'react-router-dom';
import './App.css';
import Moviepractice from './Moviepractice';
import MovieApp from './MovieApp';

function App() {
 
  return (
    <div className="App">
   <Routes>
    <Route path='/movieapppractice' element={<Moviepractice/>}/>
    <Route path='movie' element={<MovieApp/>}/>
   </Routes>
    </div>
  );
}

export default App;
