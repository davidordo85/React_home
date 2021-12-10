import './App.css';
import IndexPage from './components/IndexPage/IndexPage';
import { LoginPage } from './components/auth';

function App() {
  return (
    <div className="App">
      {/* <IndexPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
