import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<About />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
