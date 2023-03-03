import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Project from './components/pages/Project/Project';
import Experience from './components/pages/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectDisplay from './components/pages/ProjectDisplay';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hailemariam Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is my personal portfolio" />

      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
