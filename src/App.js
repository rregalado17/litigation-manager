import './App.css';
import './App.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import LawyersContainer from './components/LawyersContainer';
import LitigationsContainer from './components/LitigationsContainer';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Lawyer from './components/Lawyer';
import Litigation from './components/Litigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLawyers } from './reducers/lawyerSlice';
import { fetchLitigations } from './reducers/litigationSlice';

function App() {

  const { store, isLoading} = useSelector((store) => store.lawyer)
  const dispatch = useDispatch();

  // const lawyersArray = useSelector((store) => store.lawyer.lawyers)

  useEffect(() => {
    dispatch(fetchLawyers());
    dispatch(fetchLitigations())
  }, [])

  if(isLoading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawyers/:id" element={<Lawyer />} />
        <Route path='/lawyers/*' element={<LawyersContainer/>} />
        <Route path='/litigations/*' element={<LitigationsContainer/>} />

      </Routes>
    </main>
  );
}

export default App;
