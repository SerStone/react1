import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  let  classNameItem = 'card';
  return (
    <div className="App">
<div className={classNameItem}>
    <h2>Bart</h2>
    <img src={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} alt={'ddd'}/>
</div>

        <div className={classNameItem}>
            <h2>Bart</h2>
            <img src={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} alt={'ddd'}/>
        </div>

        <div className={classNameItem}>
            <h2>Bart</h2>
            <img src={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} alt={'ddd'}/>
        </div>
    </div>
  );
}

export default App;
