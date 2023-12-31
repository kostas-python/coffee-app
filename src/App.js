import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
        <Switch>
          
        </Switch>
      </Router>
    </div>
)};

export default App;
