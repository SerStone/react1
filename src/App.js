import './App.css';
import {BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import {Albums, Comments, Home, Todos} from "./components";
import {Posts} from "./components/AboutPosts/Posts/Posts";

function App() {




  return (

    <div className="App">

<ul className={'Navbar'}>
  <li><Link to={'/'}>Home Page</Link></li>
  <li><Link to={'/todos'}>Todos</Link></li>
  <li><Link to={'/albums'}>Albums </Link></li>
    <li><Link to={'/comments'}>Comments</Link></li>
</ul>

      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/todos'} element={<Todos/>}/>
          <Route path={'/albums'} element={<Albums/>}/>
          <Route path={'/comments'} element={<Comments/>}/>
          <Route path={'/comments/:id'} element={<Posts/>}/>
      </Routes>
    </div>
  );
}

export default App;
