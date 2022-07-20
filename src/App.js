import './App.css';
import LawyersContainer from './components/LawyersContainer';
import LitigationsContainer from './components/LitigationsContainer';
import Navbar from './components/Navbar'

function App() {
  
  return (
    <main>
      <Navbar/>
      <LawyersContainer />
      <LitigationsContainer />
    </main>
  );
}

export default App;
