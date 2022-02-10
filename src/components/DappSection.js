import React from 'react';
import '../App.css';
import './DappSection';
import {Button} from '../components/Button';


function DappSection() {

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      
      <div className='container'>
        <div className='col'>
          <span style = {{fontSize: '2em', color: 'gray'}}>0</span>
          <br />
          <span style = {{fontSize: '2em'}}>Owned Nodes</span>
        </div>

        <div className='col'>
          <span style = {{fontSize: '2em', color: 'gray'}}>0</span>
          <br />
          <span style = {{fontSize: '2em'}}>Total TVL</span>
        </div>  

        <div className='col'>
          <span style = {{fontSize: '2em', color: 'gray'}}>0</span>
          <br />
          <span style = {{fontSize: '2em'}}>Total Nodes Owned</span>
        </div>

      </div>
      <div className='container'>
        <div className='col'>
          <span style = {{fontSize: '2em', color: 'gray'}}>0 LVT</span>
          <br />
          <span style = {{fontSize: '2em'}}>My rewards </span>
          <br />
          <br />
          <Button buttonStyle='btn--outline'>Claim</Button>
          <Button buttonStyle='btn--outline'>Compound</Button>

        </div>
      </div>
    </div>
  );
}

export default DappSection;
