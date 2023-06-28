import {Link, useNavigate} from 'react-router-dom';

const AddOnsYear = () => {
  const navigate = useNavigate();

  const navigateToSummaryYear = () =>{
    navigate('/summaryear');
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
          <span>+$10/yr</span>
        </div>

        <div className="addons-card">
          <input type="checkbox" />
          <div className="card-desc">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$20/yr</span>
        </div>

        <div className="addons-card">
          <input type="checkbox" />
          <div className="card-desc">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$20/yr</span>
        </div>
      </div>

      <div className="addons-navigate">
        <Link to='/plan'>Go back</Link>
        <button onClick={navigateToSummaryYear}>Next Step</button>
      </div>
    </div>
  )
}

export default AddOnsYear