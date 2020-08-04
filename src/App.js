import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import NutritionLabel from './components/NutritionLabel'
import Calendar from './components/UserCalendar'
import UserForm from './components/UserForm'
import DVForm from './components/DVForm'
import BMRCalc from './components/BMRCalc'


function App() {


  return (
    <div className="container">
      <header>
        this is a header
      </header>
      <NavBar />

      <div className="row" id="row1">
        <div className="col" id="row1-col1">
          <img className='profile-pic'
            src="https://ca.slack-edge.com/T02MD9XTF-U0104PU0YH1-1165c623265e-512"
            alt="httpshttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1slOCxCiXLOb4vJwj4nFyLh08arZKri3NUw&usqp=CAU">
          </img>
        </div>
        <NutritionLabel />
        <Calendar />
      </div>

      <div className="row" id="row2">
        <UserForm />
        <DVForm />
      </div>
        <BMRCalc />

    </div>
  );
}

export default App;
