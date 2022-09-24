import './App.css';
import {BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import {Albums, Comments, Todos} from "./components";

function App() {

  return (
    <div className="App">
<ul>
  <li><Link to={'/'}>Home Page</Link></li>
  <li><Link to={'/todos'}>Todos</Link></li>
  <li><Link to={'/albums'}>Albums </Link></li>
    <li><Link to={'/comments'}>Comments</Link></li>
</ul>
      <hr/>
      <Routes>
        <Route path={'/'} element={'Home'}/>

        <Route path={'todos'} element={<Todos/>}/>

          <Route path={'albums'} element={<Albums/>}/>

          <Route path={'comments'} element={<Comments/>}/>
      </Routes>
    </div>
  );
}

export default App;
