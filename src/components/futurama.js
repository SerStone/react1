function Futurama(props){
    let {itemName,pic,profession} = props
    let  classNameItem = 'card2';
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <p>Profession: {profession}</p>
            <img src={pic} alt={'Futurama'}/>
        </div>
    );

}

export default Futurama;