import React from 'react';
import './App.css';
import IndexPage from './components/IndexPage/IndexPage';
import { LoginPage } from './components/auth';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      {isLogged ? (
        <IndexPage isLogged={isLogged} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
