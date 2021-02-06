import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Login from './Login'

function App() {
  return (
    <div>
    <Header/>
    <div>
     <Router>
       <Route exact path="/" component={LandingPage}/>
       <Route exact path="/login" component={Login}/>
     </Router>
    </div>
    </div>
  );
}

export default App;
