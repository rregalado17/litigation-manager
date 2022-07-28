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

  const lawyersArray = useSelector((store) => store.lawyer.lawyers)
  const litigationsArray = useSelector((store) => store.litigation.litigations)

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
        <Route path='/lawyers/' element={<LawyersContainer lawyersArray={lawyersArray}/>}/> 
          <Route path="/lawyers/:id" element={<Lawyer lawyersArray={lawyersArray}/>} />
        <Route />
        <Route path='/litigations/' element={<LitigationsContainer litigationsArray={litigationsArray}/>} />
          <Route path="/litigations/:id" element={<Litigation litigationsArray={litigationsArray}/>} />
        <Route /> 
        <Route 
          path='*'
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route />
      </Routes>
    </main>
  );
}


export default App;
