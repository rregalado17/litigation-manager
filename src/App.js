import './App.css';
import './App.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import LawyersContainer from './components/LawyersContainer';
import LitigationsContainer from './components/LitigationsContainer';
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import Lawyer from './components/Lawyer';
import Litigation from './components/Litigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LawyerInput  from './components/LawyerInput';
import { fetchLawyers } from './store/lawyers';
import { fetchLitigations } from './store/litigations';
import LitigationInput from './components/LitigationInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  
  const dispatch = useDispatch();
  const lawyersArray = useSelector((store) => store.lawyers.list)
  const litigationsArray = useSelector((store) => store.litigations.array)

  useEffect(() => {
    dispatch(fetchLawyers());
    dispatch(fetchLitigations())
    }, [])

  return (
    <Container>
    <main>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/lawyers/' element={<LawyersContainer lawyersArray={lawyersArray}/>}/> 
          <Route path="/lawyers/:id" element={<Lawyer lawyersArray={lawyersArray}/>} />
          <Route path="/lawyers/new" element={<LawyerInput lawyersArray={lawyersArray}/>} />
        <Route />
        <Route path='/litigations/' element={<LitigationsContainer litigationsArray={litigationsArray}/>} />
          <Route path="/litigations/:id" element={<Litigation litigationsArray={litigationsArray}/>} />
          <Route path="/litigations/new" element={<LitigationInput lawyersArray={lawyersArray}/>} />
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
    </Container>
  );
}


export default App;
