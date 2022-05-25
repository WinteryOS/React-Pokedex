import AllPokemon from './containers/AllPokemon';
import Pokemon from './components/Pokemon';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Collection from './components/Collection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/pokemon/:id' element={<Pokemon />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/' element={<AllPokemon />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
