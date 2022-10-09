import React from "react";
import {Routes,Route} from "react-router-dom";

import {Header, Posts, Users} from "./componenets";

function App() {

  return (
    <div className="App">
<Header/>
      <div>
          <Routes>
              <Route path={'/users'} element={<Users/>}/>
              <Route path={'/posts'} element={<Posts/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
