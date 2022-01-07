import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contact';
import Sobre  from './components/pages/Sobre';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Container customClass= "min_heigth">
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/contact" element={<Contato />} ></Route>
            <Route path="/projects" element={<Projects />} ></Route>
            <Route path="/about" element={<Sobre />} ></Route>
            <Route path="/newproject" element={<NewProject />} ></Route>
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
