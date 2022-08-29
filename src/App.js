
import './App.css';
import Fetch from './components/fetch';
import TopBar from './components/TopBar'
 import Country from './components/Country';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <TopBar />
     <Route path='/country' element={<Country />} />
      <Fetch />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
