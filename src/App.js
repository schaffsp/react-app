import './App.css';
import NavBar from './NavBar';
import HeaderImage from './images/header_image.png'

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-Container" style={{ backgroundImage: `url(${HeaderImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className='Header-Spacer'>
          {/* <img src={HeaderImage} width={750} alt="Pure Shenandoah"/> */}
        </div>
        <div className="Header">
          <h1>We're not just protecting your packages. Every product we produce takes carbon out of the atmosphere.</h1>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
