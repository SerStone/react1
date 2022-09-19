import './App.css';
import Users from "./componenets/Users/Users";
import {Posts} from "./componenets/Posts/Posts";

import {getPostsAxios} from './services/axiosGetter'
import {useState} from "react";

function App() {
    let [posts,setPosts] = useState([]);


let getPostsId=(id)=>{
    getPostsAxios(id).then(value => setPosts(value.data))
}

  return (
    <div className="App">
<Users getPostsId={getPostsId}/>
        {posts&&<Posts posts={posts}/>};
    </div>
  );
}

export default App;
