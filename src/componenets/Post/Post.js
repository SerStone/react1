const Post = ({post,post:{body,title}}) =>{
    console.log(post)
    return(
        <div className={'post'}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default Post