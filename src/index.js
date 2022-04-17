import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutF from './components/AboutF';
// import NavbarF from './components/NavbarF';
import TextForm from './components/TextFormF';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
   {/*  <App /> */}


    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="/" element={ <NavbarF title="TextUtils" about="About" />} > </Route> */}
        <Route path="/" element={ <TextForm heading="Enter the text to analyze below"/>} > </Route>
        <Route path="/about" element={ <AboutF/>} > </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
