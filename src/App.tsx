import './App.css';
import DisplayFooter from './components/DisplayFooter/DisplayFooter';
import MainWrapp from './components/MainWrapp/MainWrapp';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainWrapp>
        Main
        <DisplayFooter/>
      </MainWrapp>
    </div>
  );
}

export default App;
