import './App.css';
import NavBar from './NavBar';
import HeaderImage from './images/header_image.png'
import JarImage from './images/jar_image.png'
import Tractor from './images/farm-tractor-icon.svg';
import Customize from './images/customize.svg';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-Container" style={{ backgroundImage: `url(${HeaderImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className='Header-Spacer'>
        </div>
        <div className="Header">
          <h1>We're not just protecting your packages. Every product we produce takes harmful CO2 out of the atmosphere.</h1>
          <button>Learn More</button>
        </div>
      </div>
      <div className='Section-Container'>
        <div className="Section-Element">
          <img src={Customize} width={100} alt="Tractor"/>
          <div>
            <h2 className="Section-Header">Customize your solution</h2>
            <p className="Section-Paragraph">Let us tailor your solution to best fit your business needs. Our packaging can be customized down to the details to ensure that Pure Shenandoah adds as much value as possible to your organization. Our team is ready to answer any questions about how our packaging can best integrate with your supply chain. Reach out to example@pureshenandoah.com to learn more!</p>
        
          </div>  
        </div>
        <div className="Section-Element">
          <img src={Tractor} width={150} alt="Tractor"/>
          <div>
            <h2 className="Section-Header">Support farming communities</h2>
            <p className="Section-Paragraph">From the outset, the goal of developing industrial hemp products was to get as many acres of local farmland planted as possible. Pure Shenandoah has always had a close relationship with our growers. Our company started alongside the 2018 farm bill, which hoped to reignite American agriculture, and remains committed to helping the communities that we owe so much of our success to.</p>
        
          </div>  
        </div>
      </div>
      <div className='Section-Container'>
        <div className="Section-Element" style={{ backgroundImage: `url(${JarImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        </div>
        <div className='Section-Element'>
          <img src={Tractor} width={100} alt="Tractor"/>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
      </div>
      
    </div>
  );
}

export default App;
