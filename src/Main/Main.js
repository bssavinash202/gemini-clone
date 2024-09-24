import React from 'react'
import './Main.css';
import {assets} from '../assets/assets';
const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
          <p>Gemini AI</p>
          <img src={assets.user_icon} alt=''/>
        </div>
        <div className='main-container'>
          <div className='greet'>
          <p><span>Hello, Avinash</span></p>
          <p>How can I help you today ?</p>
          </div>
          <div className='cards'>
            <div className='card'>
              <p>Suggest beautiful places to see on an upcoming road trip.</p>
              <img src={assets.compass_icon} alt=''/>
            </div>
            <div className='card'>
              <p>Breifly summarize this Concept: Urban Planning.</p>
              <img src={assets.bulb_icon} alt=''/>
            </div>
            <div className='card'>
              <p>What are different types of stock portfolios.</p>
              <img src={assets.message_icon} alt=''/>
            </div>
            <div className='card'>
              <p>Suggest some Business ideas for online market.</p>
              <img src={assets.code_icon} alt=''/>
            </div>
          </div>
          <div className='main-bottom'>
            <div className='search-box'>
              <input type='text' placeholder='Enter a Prompt here'/>
              <div>
                <img src={assets.gallery_icon} alt=''/>
                <img src={assets.mic_icon} alt=''/>
                <img src={assets.send_icon} alt=''/>
              </div>
            </div>
            <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
    </div>
  )
}

export default Main;