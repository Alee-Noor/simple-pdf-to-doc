import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import ConvertPage from './components/ConvertPage';
import Navbar from './components/Navbar';  // Corrected path for Navbar import
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar component added here */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/convert' element={<ConvertPage />} />
      </Routes>
    </Router>
  );
}

export default App;
