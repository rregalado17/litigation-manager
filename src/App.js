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
import LawyerInput  from './components/LawyerInput';
import { fetchLawyers } from './actions/fetchLawyers';
import { fetchLitigations } from './actions/fetchLitigations';
import { getAllLawyers } from './reducers/lawyerSlice';

function App() {


  const { store, isLoading} = useSelector((store) => store.lawyer)
  const dispatch = useDispatch();

  // console.log(getAllLawyers)
  const lawyersArray = useSelector((store) => store.lawyer.lawyers)
  const litigationsArray = useSelector((store) => store.litigation.litigations)

  // useEffect(() => {
  //   dispatch(fetchLawyers());
  //   dispatch(fetchLitigations())
  // }, [])


  

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
          <Route path="/lawyers/new" element={<LawyerInput lawyersArray={lawyersArray}/>} />
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
