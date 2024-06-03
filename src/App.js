import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Thanh';
  const age = 24;
  const isMale = true;
  const student = {
    name: 'Thanh Frontend'
  };
  const colorList = ['red', 'green', 'yellow', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thanh Nguyen 123
        </p>
        <p>Xinchao {name} - Age: {age} {isMale ? 'Male' : 'Female'}</p>
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}
        {isMale && (<>
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
        </>)}
        <p>{student.name}</p>
        <ul>
          {colorList.map( color => (
          <li>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
