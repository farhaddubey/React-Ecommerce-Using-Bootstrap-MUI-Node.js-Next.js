import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext =createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries");
  },[])

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      console.log(res.data.data);
    })
  }
  const values={
    countryList,
    selectedCountry,
    setSelectedCountry
  }


  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path="/" exact={true} component={<Home/>} />
        </Routes>
      </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
export {MyContext}
