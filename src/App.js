import './App.css';
import {Comments, Posts} from "./components";
import {Users} from "./components";
import {useState} from "react";
import {postService} from "./services/post.service";
import {commentService} from "./services/comment.service";




function App() {
    const [posts, setPosts] = useState([])
    const getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPosts(data))
    }
    const [comments, setComments] = useState([])
    const getPostId = (postId) => {
        commentService.getComments(postId).then(({data}) => setComments(data))
    }

  return (
    <div className="App">
      <Users getUserId={getUserId}/>
      <Posts posts={posts} setPosts={setPosts}
             getPostId={getPostId}
      />
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default App;
