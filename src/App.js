import './App.css';
import Navbar from "./components/NavBar/Navbar";
import StartComponent from "./components/StartComponent/StartComponent";

function App() {
  return (
      <>
          <Navbar/>
          <div className="App">
              <StartComponent/>
          </div>
      </>

  );
}

export default App;
