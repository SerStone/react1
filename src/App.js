import './App.css';
import Simpsons from "./components/simpsons";
import Characters from "./components/rickAndmorty";
import Futurama from "./components/futurama";
function App() {

    fetch('futuramaapi.herokuapp.com/api/characters/1,2,3,4,5,6')

  return (
    <div className="wrap">

        <div className='container'>
            <h1>Simpsons</h1>
        <div className='simpCont'>

     <Simpsons itemName={'Bart'} pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
     <Simpsons itemName={'Homer'} pic={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}/>
     <Simpsons itemName={'Marge'} pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
     <Simpsons itemName={'Maggie'} pic={'https://i.pinimg.com/originals/d3/17/a0/d317a0f61d5b71261bd5bbe392799c1d.png'}/>
     <Simpsons itemName={'Lisa'} pic={'https://i.pinimg.com/originals/14/0f/57/140f575e6f499660b31f1b7fe355a1b2.png'}/>
        </div>
        </div>

        <div className='mortyCont'>

            <h1>Rick and Morty</h1>
        <Characters/>

        </div>


            <h1>Futurama</h1>
        <div className='futCont'>
            <Futurama itemName={'Fry'} profession={'Pizza delivery man'} pic={'https://pngimg.com/uploads/futurama/futurama_PNG92.png'}/>
            <Futurama itemName={'Lyle'} profession={'Pilot'} pic={'https://pngimg.com/uploads/futurama/futurama_PNG68.png'}/>
            <Futurama itemName={'Bender'} profession={'Mechanic'} pic={'https://pngimg.com/uploads/futurama/futurama_PNG38.png'}/>
            <Futurama itemName={'Professor'} profession={'Scientist'} pic={'https://i.pinimg.com/originals/ed/f5/c6/edf5c62f78f26fa60c60208426cd4f1c.png'}/>
            <Futurama itemName={'Hermes'} profession={'Manager'} pic={'https://i.pinimg.com/originals/c1/14/f8/c114f87a1a4034befe577cd5870e7ece.png'}/>
            <Futurama itemName={'Zoidberg'} profession={'Doctor'} pic={'https://upload.wikimedia.org/wikipedia/uk/7/7e/%D0%97%D0%BE%D0%B9%D0%B4%D0%B1%D0%B5%D1%80%D2%91_%28%D0%A4%D1%83%D1%82%D1%83%D1%80%D0%B0%D0%BC%D0%B0%29.png'}/>
        </div>
    </div>
  );



}

export default App;
