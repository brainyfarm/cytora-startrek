import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Person from './pages/Person/Person';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/people/:id" element={<Person />} />
    </Routes>
  );
}

export default App;
