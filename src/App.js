import './App.css';
import LawyersContainer from './components/LawyersContainer';
import LitigationsContainer from './components/LitigationsContainer';
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLawyers } from './reducers/lawyerSlice';
import { fetchLitigations } from './reducers/litigationSlice';


function App() {

  const { store, isLoading} = useSelector((store) => store.lawyer)
  const dispatch = useDispatch();

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
      <LawyersContainer />
      <LitigationsContainer />
    </main>
  );
}

export default App;
