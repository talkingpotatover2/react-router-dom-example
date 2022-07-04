import React from 'react';
import ReactDOM from 'react-dom';  //hash 정적 browser 동적
import { HashRouter, BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return(
    <div>
      <h1>Hello React Rounter Dom</h1>
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>  {/*<a>는 깜빡거림 <Link>는 x*/}
        <li><NavLink to="/topics">TOPICS</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/topics" element={<Topics />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={"not found"}>not found</Route>
      </Routes>
    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

reportWebVitals();
