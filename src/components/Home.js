import React from 'react'
import lawoffice from '../img/lawoffice.jpeg'

    const Home = () => {
        return (
        <div className='header-content'>
            <h1>Welcome to Litigation Manager</h1>
            <div className='h-shape'></div>
            <div className='left-header'>
                <img className='image' src={lawoffice} alt="Law Office"/>
            </div>
            <div className='right-header'>
                <p>Welcome to Litigation Manager. 
                You can use the navigation bar to navigate through 
                the list of lawyers to view their matters, create new lawyers, and view litigation information.</p>
            </div>
        </div>
        );
    };

export default Home