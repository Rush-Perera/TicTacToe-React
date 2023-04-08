import './App.css';

const App = () => {

    const name = 'Rush';
    const isNameSet = true; 
  return (
    <div className="App">
      <h1>Hi, {isNameSet ? name : 'User'}</h1>
    </div>
  );
}

export default App;