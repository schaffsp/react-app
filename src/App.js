import './App.css';
import NavBar from './NavBar';
import HeaderImage from './images/header_image.png'
import Tractor from './images/farm-tractor-icon.svg';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-Container" style={{ backgroundImage: `url(${HeaderImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className='Header-Spacer'>
        </div>
        <div className="Header">
          <h1>We're not just protecting your packages. Every product we produce takes carbon out of the atmosphere.</h1>
          <button>Learn More</button>
        </div>
      </div>
      <div className='Section2-Container'>
        <div className="Section2-Element">
          <img src={Tractor} width={100} alt="Tractor"/>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
        <div className='Section2-Element'>
          <img src={Tractor} width={100} alt="Tractor"/>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
        <div className='Section2-Element'>
          <img src={Tractor} width={100} alt="Tractor"/>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
