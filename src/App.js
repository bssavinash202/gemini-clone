import React, { useEffect } from 'react';
import './App.css';
import Side from './SideBar/Side';
import Main from './Main/Main';

const App=() => {
  useEffect(()=>{
    document.title='Gemini-clone';
  },[]);
  return (
    <div className='app'>
     <Side></Side>
     <Main></Main>
    </div>
  );
}

export default App;
