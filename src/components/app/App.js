import './App.css';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home';
import {BrowserRouter as Router,Routes,link } from 'react-router-dom'

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
   </div>
  );
}

function MainApp(){

  return(
    <Router>
      <div>
    <div className="topNavBar">
            <link className="active" to="/">Home</link>.
            <link to="/contact">Contact</link>
            <link to="/about">About</link>
        </div>
        
  <Routes>

 
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='user/:username' element={<User/>}/>
    
    </Routes>
  </div>

1</Router>


    

  );
    
  }





export default App;
export {MainApp}
