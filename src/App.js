import './App.css';
import Header from './components/Header';
import data from './data';
import Main from './components/Main';

function App() {
  const mainComponentArray = data.map(elem => {
    return <Main data={elem} />
  })
  console.log(mainComponentArray)
  return (
    <div className="App">
      <Header />
      <div className='main-wrapper'>
        {mainComponentArray}
      </div>
    </div>
  );
}

export default App;
