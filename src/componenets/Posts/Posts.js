import Post from "../Post/Post";

const Posts = ({posts}) =>{
    return(
        <div className={'posts'}>
            {posts.map((post,index)=><Post key={index} post={post}/>)}
        </div>
    );
};
export {Posts}