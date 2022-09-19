import {useRef} from "react";



export default function User (props){
    let {item: {name,id},getPostsId} = props;
    const ref = useRef(null);

    const userDetail = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <button onClick={()=>{getPostsId(id)
                userDetail()

            }

            }>Show more</button>
        </div>
    );
};
