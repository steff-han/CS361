import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from 'react';

import LogInPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='wrapper'>

        <h1>ToDo Application</h1>



        <Router>
          <Navigation/>
            <Routes>
              <Route path="/register" element={< RegisterPage />}/>
              <Route path="/login" element={< LogInPage />}/>
           
            </Routes>
        </Router>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <footer> © 2025 Hana Steffen </footer>

      </div>
    </>
  )
}

export default App
