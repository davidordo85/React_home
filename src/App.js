import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import IndexPage from './components/IndexPage/IndexPage';
import { LoginPage, RegisterPage } from './components/auth';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  let match = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} params={match} />}
        />
        <Route
          path="/"
          element={<IndexPage isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route
          path="/404"
          element={
            <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}
            >
              404 | Not found page
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
