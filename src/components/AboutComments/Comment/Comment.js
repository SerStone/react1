import {Link} from "react-router-dom";

const Comment = ({comment}) => {


    return (
        <div className={'Comment'}>
            <h3>PostId: {comment.postId} Id: {comment.id} Title:</h3>
            <Link to={comment.postId.toString()}><h3>{comment.name}</h3></Link>
            <p>Body: {comment.body}</p>
        </div>
    );
};

export default Comment;