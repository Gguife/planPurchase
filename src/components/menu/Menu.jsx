import './Menu.css';
import DisableNav  from '../disableNavLink/DisableNavLink';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const [showPlan, setShowPlan] = useState(false);
  const [showAddons, setShowAddons] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(()=>{
    setShowPlan(location.pathname === '/planyear');
    setShowAddons(location.pathname === '/addonsyear');
    setShowSummary(location.pathname === '/summaryear');
  },[location])

  return (
    <div className='menu'>
      <div className="menu-content">
        <DisableNav exact='true' to='/' className='menu-numberPage' activeclassname='active'>
            <p>1</p>
        </DisableNav>
        <div className="menu-descPage">
          <h3>STEP 1</h3>
          <p>Your Info</p>
        </div>
      </div>
      
      <div className="menu-content">
        {!showPlan &&
          <DisableNav exact='true' to='/plan' className='menu-numberPage' activeclassname='active'>
            <p>2</p>
          </DisableNav>
        }
        {showPlan &&
          <DisableNav exact='true' to='/planyear' className='menu-numberPage' activeclassname='active'>
            <p>2</p>
          </DisableNav>
        }
        <div className="menu-descPage">
          <h3>STEP 2</h3>
          <p>Select Plan</p>
        </div>
      </div>
      
      <div className="menu-content">
      {!showAddons &&
          <DisableNav exact='true' to='/addons' className='menu-numberPage' activeclassname='active'>
            <p>3</p>
          </DisableNav>
        }
        {showAddons &&
          <DisableNav exact='true' to='/addonsyear' className='menu-numberPage' activeclassname='active'>
            <p>3</p>
          </DisableNav>
        }
        <div className="menu-descPage">
          <h3>STEP 3</h3>
          <p>Add-ONS</p>
        </div>
      </div>

      <div className="menu-content">
      {!showSummary &&
          <DisableNav exact='true' to='/summary' className='menu-numberPage' activeclassname='active'>
            <p>4</p>
          </DisableNav>
        }
        {showSummary &&
          <DisableNav exact='true' to='/summaryear' className='menu-numberPage' activeclassname='active'>
            <p>4</p>
          </DisableNav>
        }
        <div className="menu-descPage">
          <h3>STEP 4</h3>
          <p>Summary</p>
        </div>
      </div>
    </div>
  )
}

export default Menu;