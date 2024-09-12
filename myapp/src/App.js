import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";



export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}
