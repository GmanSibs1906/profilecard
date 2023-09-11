import './App.css';
import UserProfileCard from './UserProfileCard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() { 
  return (
    <Router>
      <div className="App">
      <UserProfileCard/>
    </div>
    </Router>
    
  );
}

export default App;
