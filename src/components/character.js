

export default function Character(props){
    let {item:character} = props;
    let  classNameItem = 'card';
    return (<div className={classNameItem}>
        <h2>{character.id} - {character.name}</h2>
<p>Status {character.status} <br/> Species {character.species} <br/> Gender {character.gender} </p>
        <br/>
        <img src={character.image} alt={'Rick and Morty Serial'}/>
    </div>)
}
// Створити компонент який описує персонажа
// (властивості id,name,status,species,gender,image) з цього апі