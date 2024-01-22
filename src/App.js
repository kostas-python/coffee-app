import './App.css';
import Navbar from './components/navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
          <Routes path="/" exact component={Home} /> 
        <Footer/>
      </Router>
      
    </div>
)};

export default App;
