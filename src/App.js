import { hot } from 'react-hot-loader/root'
import React from 'react';
import "./App.scss"
import Main from './components/main/main'
import Header from './components/header/header'
import About from './components/about/about'
import Github from './components/info/info'
import { HashRouter, Route } from 'react-router-dom'





function App() {
  return (
    <div className="App ">
    <HashRouter >
          <Header/>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/github" exact component={Github} />
    </HashRouter>
    </div>
  );
}



export default hot(App)
