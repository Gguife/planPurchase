import './AddOns.css';
import { Link, useNavigate } from 'react-router-dom';

const AddOns = () => {
  const navigate = useNavigate();

  const navigateToSummary = () =>{
    navigate('/summary');
  }

  return (
    <div className='addons'>
      <h2>Pick add-ons</h2>
      <p className='subtitle'>Add-ons help enhance your gaming experience.</p>
      <div className="addons-cards">
        <div className="addons-card">
          <input type="checkbox" />
          <div className="card-desc">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </div>

        <div className="addons-card">
          <input type="checkbox" />
          <div className="card-desc">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$2/mo</span>
        </div>

        <div className="addons-card">
          <input type="checkbox" />
          <div className="card-desc">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$2/mo</span>
        </div>
      </div>

      <div className="addons-navigate">
        <Link to='/plan'>Go back</Link>
        <button onClick={navigateToSummary}>Next Step</button>
      </div>
    </div>
  )
}

export default AddOns;