import './App.css'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from "./components/Tyoaikakirjaus"
import Raportit from "./components/Raportit"
import Profile from "./components/profile"
import Login from "./components/Login"
import useToken from "./components/useToken"
import logo from './components/photos/leaf.png'

const Header = () => {
  return(
    <header className="header">
        <img src={logo} alt="leaf" />
        <p  class="logo">Sanpek Rakennus OY</p>
      <div className="header-right">
      <a href="/profile">Omat tiedot</a>
      <a  href="/raportit">Raportit</a>
      <a class href="/työaikakirjaus">Työaikakirjaus</a>
      <a  href="/palkat">Palkat</a>
      </div>
    </header>
  )
}

const Footer = () =>{
  return(
    <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Sanpek Rakennus Oy © 2021</p>
        </footer>
    </div>
  )
}



function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/työaikakirjaus">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/raportit">
            <Raportit />
          </Route>
        </Switch>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
