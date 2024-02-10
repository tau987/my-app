
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import CompanyForm from './Components/Compo.js';
import Upload from './Components/Upload.js';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<CompanyForm />} />
      <Route exact path="/companyDetail" element={<Upload />} />

      </Routes>
      
    </Router>
  );
}

export default App;
