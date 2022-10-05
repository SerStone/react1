import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {combineReducers,createStore} from "redux";


const userReducer =( state = {users: [], user:null},action) => {
    switch (action.type){
        case "Users":
            return{
                ...state,
                users: action.payload
            };
            case "User":
                let id = action.payload;
                let user = state.users.find(value => value.id === id)
            return{...state, user:user}

        default:
            return state;
    }
}

const postReducer =( state = {posts: [], post:null},action) => {
    switch (action.type){
        case "Posts":
            return{
                ...state,
                posts: action.payload
            };
        case "Post":
            let id = action.payload;
            let post = state.posts.find(value => value.id === id)
            return{...state, post:post}

        default:
            return state;
    }
}
const commentReducer =( state = {comments: [], comment:null},action) => {
    switch (action.type){
        case "Comments":
            return{
                ...state,
                comments: action.payload
            };
        case "Comment":
            let id = action.payload;
            let comment = state.comments.find(value => value.id === id)
            return{...state, comment:comment}

        default:
            return state;
    }
}

let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
});
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
             <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
