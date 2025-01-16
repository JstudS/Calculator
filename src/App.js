import BackgroundComponent from "./components/Background";
import Calculator from "./components/Calculator";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <BackgroundComponent calculator={<Calculator containerClassName={'App'}/>}/>
    </div>
  );
}

export default App;
