


export default function User (props){
    let {item: {name,id},getPostsId} = props;



    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <button onClick={()=>{getPostsId(id)}

            }>Show more</button>
        </div>
    );
};
