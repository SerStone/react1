import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";

import {Comments, Home, Navigation, Posts, Users} from "./components";
import {MainLayout} from "./layouts";


function App() {

  return (
    <div className="App">
        <MainLayout/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/users'} element={<Users/>}/>
        <Route path={'/posts'} element={<Posts/>}/>
        <Route path={'/comments'} element={<Comments/>}/>
      </Routes>
    </div>
  );
}

export default App;
