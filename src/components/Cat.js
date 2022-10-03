const Cat = ({cat, deleteCat}) => {

    return(
        <div className={'animal'}>{cat.name}
        <button onClick={()=> {deleteCat(cat.id)}}>Remove</button></div>
    )

}

export {Cat}