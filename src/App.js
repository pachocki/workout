import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'
import Exercise from './Pages/Exercise/Exercise'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
    <Routes>
      <Route path="/workout" element={<Home/>}/>
      <Route path="/exercise" element={<Exercise/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
