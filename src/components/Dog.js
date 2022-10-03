const Dog = ({dog, deleteDog}) => {


    return(
        <div className={'animal'}>{dog.name}
            <button onClick={()=> deleteDog(dog.id)}>Remove</button></div>
    )

}

export {Dog}