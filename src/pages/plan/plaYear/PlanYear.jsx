import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './PlanYear.css'
//Imagens
import Arcade from '../../../assets/icon-arcade.svg';
import Advanced from '../../../assets/icon-advanced.svg';
import Pro from '../../../assets/icon-pro.svg';

const PlanYear = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(location.pathname === '/planyear');

  useEffect(() => {
    if(location.pathname === '/planyear'){
      setIsChecked(true)
    }
  }, [location])

  const handleClickCheckbox = () =>{
    setIsChecked(!isChecked);
    setTimeout(() => {
      navigate(isChecked ? '/plan' : '/planyear')
    }, 0);
  }

  //Border card select
  const [selectCard1, setSelectCard1] = useState(false);
  const [selectCard2, setSelectCard2] = useState(false);
  const [selectCard3, setSelectCard3] = useState(false);
  const handleCardClick = (cardIndex) =>{
    setSelectCard1(cardIndex === 1);
    setSelectCard2(cardIndex === 2);
    setSelectCard3(cardIndex === 3);
  }

  const navigateSummaryYear = () =>{
    navigate('/summaryear')
  }


  return (
    <div className='plan'>
      <h2>Seleect your plan</h2>
      <p className='plan-subtitle'>You have the option of monthly or yearly billing.</p>
      <div className="plan-cards">
        <div className="plan-card year" style={selectCard1 ? { border:'1px solid hsl(213, 96%, 18%)' } : {}} onClick={() => handleCardClick(1)} >
          <img src={Arcade} alt="" />
          <h3>Arcade</h3>
          <p>$90/yr</p>
          <span>2 months free</span>
        </div>

        <div className="plan-card year" style={selectCard2 ? { border:'1px solid hsl(213, 96%, 18%)' } : {}} onClick={() => handleCardClick(2)} >
          <img src={Advanced} alt="" />
          <h3>Advance</h3>
          <p>$120/yr</p>
          <span>2 months free</span>
        </div>

        <div className="plan-card year" style={selectCard3 ? { border:'1px solid hsl(213, 96%, 18%)' } : {}} onClick={() => handleCardClick(3)} >
          <img src={Pro} alt="" />
          <h3>Pro</h3>
          <p>$150/yr</p>
          <span>2 months free</span>
        </div>
      </div>
      
      <div className="plan-card-button">
        <p>Monthly</p>
        <label class="switch">
          <input type="checkbox" 
            id='slider' 
            checked={location.pathname === '/planyear'}
            onChange={handleClickCheckbox}
          />
          <span class="slider"></span>
        </label>
        <p>Yearly</p>
      </div>

      <div className="plan-routes">
        <Link to='/'>Go back</Link>
        <button onClick={navigateSummaryYear}>Next</button>
      </div>
    </div>
  )
}

export default PlanYear;