import Home from './components/screens/Home'
import './App.css'
import FeatherIcon from 'feather-icons-react';
import { Offline, Online } from "react-detect-offline";

function App() {
  return (
    <div className="app-wrapper">
      <Offline>
        <div className="offline-wrapper">
        
        <ul>
          <li><FeatherIcon icon="cloud-off" /></li>
          <li>Disconnected</li>
          <li>check your internet connection</li>
        </ul>
        
        </div>
      </Offline>
      <Online>
        <Home />
      </Online>
    </div>
  );
}

export default App;
