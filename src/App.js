import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path='/' exact='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
