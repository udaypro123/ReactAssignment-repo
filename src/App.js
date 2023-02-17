
import './App.css';
import Homeresume from './componets/assginResume/home/Homeresume';
import Home from './componets/assign01/Home';
import Home1 from './componets/assign02/Home1';
function App() {
  return (
    <>

      <div className="App">
        <Home />
        <h1 style={{color:"blue"}}>Assignment 002</h1>
        <Home1 />
        <h1 style={{color:"blue"}}>Assignment 003</h1>
      </div>

        <hr />
        <Homeresume />
        
    </>


  );
}

export default App;
