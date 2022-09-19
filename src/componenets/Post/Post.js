


const Post = ({post,post:{body,title,userId}}) =>{
    return(
        <div className={'post'} >
            <h2>{userId}. {title}-</h2>
            <p>{body}</p>
        </div>
    )
}
export default Post