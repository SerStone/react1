function Simpsons(props){
    let {itemName,pic} = props
    let  classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic} alt={'Simpsons'}/>
        </div>
    );

}

export default Simpsons;