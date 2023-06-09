import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home></Home>}>
  </Route>
  <Route path='/home' element={<Home></Home>}>
  </Route>
  <Route path='/contact' element={<Contact></Contact>}>
  </Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
