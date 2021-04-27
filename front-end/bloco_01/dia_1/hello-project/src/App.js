import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['tomar banho', 'dormir', 'ver série'];

function App() {
  return (
    <div>{task(arr.map(item => <li>{item}</li>))}</div>
  );
}

export default App;
