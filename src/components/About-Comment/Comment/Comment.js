const Comment = ({comment}) => {

    return (
        <div className={'Comment'}>
            <h2>{comment.id}. {comment.name}</h2>
            <p><span>Email</span>: {comment.email}</p>
        </div>
    )
}
export default Comment