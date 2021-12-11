import React from 'react';
import './App.css';
import IndexPage from './components/IndexPage/IndexPage';
import { LoginPage } from './components/auth';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const handleLogin = () => setIsLogged(true);
  return (
    <div className="App">
      {isLogged ? <IndexPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
