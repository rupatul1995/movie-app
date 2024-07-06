import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieApp from './MovieApp';
import Moviepractice from './Moviepractice';

function App() {
 
  return (
    <div className="App">
   <Routes>
    <Route path='/movie' element={<MovieApp/>}/>
    <Route path='/moviepractice' element={<Moviepractice/>}/>
   </Routes>
    </div>
  );
}

export default App;
