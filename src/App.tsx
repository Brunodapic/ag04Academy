import './App.css';
import CityCardWrap from './components/CityCardWrap/CityCardWrap';
import DisplayFooter from './components/DisplayFooter/DisplayFooter';
import DisplayHeader from './components/DisplayHeader/DisplayHeader';
import MainWrapp from './components/MainWrapp/MainWrapp';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainWrapp>
        <DisplayHeader/>
        Main
        <CityCardWrap/>
        <DisplayFooter/>
      </MainWrapp>
    </div>
  );
}

export default App;
