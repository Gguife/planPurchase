import './Plan.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Imagens
import Arcade from '../../assets/icon-arcade.svg';
import Advanced from '../../assets/icon-advanced.svg';
import Pro from '../../assets/icon-pro.svg';

const Plan = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  //Border card select
  const [selectCard1, setSelectCard1] = useState(false);
  const [selectCard2, setSelectCard2] = useState(false);
  const [selectCard3, setSelectCard3] = useState(false);
  const handleCardClick = (cardIndex) =>{
    setSelectCard1(cardIndex === 1);
    setSelectCard2(cardIndex === 2);
    setSelectCard3(cardIndex === 3);
  }

  useEffect(() => {
    if(isChecked){
      navigate('/planyear');
    }
  }, [isChecked, navigate])

  const handleClickCheckbox = () =>{
    setIsChecked(!isChecked)
  }

  //Button next page
  const navigateToSummary = () =>{
    navigate('/summary')
  }

  return (
    <div className='plan'>
      <h2>Seleect your plan</h2>
      <p className='plan-subtitle'>You have the option of monthly or yearly billing.</p>
      <div className="plan-cards">
        <div className='plan-card' style={selectCard1 ? { border:'1px solid hsl(213, 96%, 18%)' } : {}} onClick={() => handleCardClick(1)} >
          <img src={Arcade} alt="" />
          <h3>Arcade</h3>
          <p>$9/mo</p>
        </div>

        <div className='plan-card' style={selectCard2 ? { border:'1px solid hsl(213, 96%, 18%)' } : {}} onClick={() => handleCardClick(2)} >
          <img src={Advanced} alt="" />
          <h3>Advance</h3>
          <p>$12/mo</p>
        </div>

        <div className='plan-card' style={selectCard3 ? { border:'1px solid hsl(213, 96%, 18%)' } : {}} onClick={() => handleCardClick(3)} >
          <img src={Pro} alt="" />
          <h3>Pro</h3>
          <p>$15/mo</p>
        </div>
      </div>
      
      <div className="plan-card-button">
        <p>Monthly</p>
        <label class="switch">
          <input type="checkbox" 
            id='slider'
            onChange={handleClickCheckbox}
          />
          <span class="slider"></span>
        </label>
        <p>Yearly</p>
      </div>

      <div className="plan-routes">
        <Link to='/'>Go back</Link>
        <button onClick={navigateToSummary}>Next</button>
      </div>
    </div>
  )
}

export default Plan;