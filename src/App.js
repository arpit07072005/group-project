
import './App.css';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Registration from './components/Registration';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Page1/>} />
      <Route path="/registration" element={<Registration/>} />
       </Routes>
       </Router>
     </div>
  );
}

export default App;
