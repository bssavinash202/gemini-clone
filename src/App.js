import React from 'react';
import './App.css';
import Side from './SideBar/Side';
import Main from './Main/Main';

const App=() => {
 
  return (
    <div className='app'>
     <Side></Side>
     <Main></Main>
    </div>
  );
}

export default App;
