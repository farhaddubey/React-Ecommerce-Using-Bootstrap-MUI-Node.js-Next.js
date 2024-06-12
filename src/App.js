import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact={true} component={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
