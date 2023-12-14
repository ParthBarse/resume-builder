import {Route, BrowserRouter as Router, Routes} from "react-router-dom" 
import Footer from './components/Footer';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import LoginPage from "./components/Login";
import RegistrationPage from "./components/Registration";
import VerificationPage from "./components/Forget";
import Create from "./components/Create";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/Create" element={<Create />}/>
            <Route path="/Resume" element={<ResumeForm />} />
            <Route path="/Registration" element={<RegistrationPage />}/>
        
            <Route path="/Admin" element={<Admin />}/>
        </Routes>
        <Footer />
     </Router>
     
     
      
      
    
    </div>
  );
}

export default App;
