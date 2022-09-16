import {useRef} from "react";

export default function User (props){
    let {item:user,lift} = props;
    const ref = useRef(null);

    const userDetail = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <div className={'user'}>
<h2>{user.id}. {user.name}</h2>  {user.username}<br/> {user.email}<br/>
            <button onClick={()=>{
userDetail()
                lift(<div className={'userDetail'}
                          ref={ref}
                >
                    Id -- {user.id} <br/>
                    Address:<br/>
                    Street:   {user.address.street} <br/>
                    Suite:  {user.address.suite}<br/>
                    City:   {user.address.city}<br/>
                    Zipcode:   {user.address.zipcode}<br/>
                    Geo:<br/>
                    Lat:   {user.address.geo.lat}<br/>
                    Lng:  {user.address.geo.lng}
                </div>)

            }}>Show more</button>
        </div>
    );
};



