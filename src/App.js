import './App.css';
import {Header, Posts, Users} from "./componenets";

function App() {

  return (
    <div className="App">
<Header/>
      <div>
          <Users/>
        <Posts/>

      </div>
    </div>
  );
}

export default App;
