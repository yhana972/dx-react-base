import './App.css';

function Food({favourite}){
  return <h1>I like {favourite}</h1>;
}

function App() {
  return (
    <div className="App">
      <div>Hello!</div>
      <Food favourite="kimchi"/>
      <Food favourite="bap"/>
      <Food favourite="ramen"/>
      <Food favourite="candy"/>
    </div>
  );
}

export default App;
