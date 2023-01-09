import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
