import './Plan.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Imagens
import Arcade from '../../assets/icon-arcade.svg';
import Advanced from '../../assets/icon-advanced.svg';
import Pro from '../../assets/icon-pro.svg';

const Plan = () => {
  const [ MonthFree ,setMonthFree ] = useState('');
  
  return (
    <div className='plan'>
      <h2>Seleect your plan</h2>
      <p className='plan-subtitle'>You have the option of monthly or yearly billing.</p>
      <div className="plan-cards">
        <div className="plan-card">
          <img src={Arcade} alt="" />
          <h3>Arcade</h3>
          <p>$9/mo</p>
        </div>

        <div className="plan-card">
          <img src={Advanced} alt="" />
          <h3>Advance</h3>
          <p>$12/mo</p>
        </div>

        <div className="plan-card">
          <img src={Pro} alt="" />
          <h3>Pro</h3>
          <p>$15/mo</p>
        </div>
      </div>
      
      <div className="plan-card-button">
        <p>Monthly</p>
        <label class="switch">
          <input type="checkbox" id='slider' />
          <span class="slider"></span>
        </label>
        <p>Yearly</p>
      </div>

      <div className="plan-routes">
        <Link to='/'>Go back</Link>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Plan