import { Link, useNavigate } from 'react-router-dom';

const SummaryYear = () => {
  const navigate = useNavigate();
  
  const navigateToConfirm = () =>{
    navigate('/complete');
  }
  return (
    <div className='summary'>
    <h2>Finishing up</h2>
    <p className='summary-subtitle'>Double-check everything looks OK before confirming.</p>
    <div className="summary-container">
      <div className="summary-plan">
        <h3>Arcade (Yearly)</h3>
        <span>$90/mo</span>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="summary-addons">
        <div className="addons-content">
          <p>Online service</p>
          <span>+$10/mo</span>
        </div>
        <div className="addons-content">
          <p>Larger storage</p>
          <span>+$20/mo</span>
        </div>
      </div>
      <div className="summary-total">
        <p>Total (per month)</p>
        <span className='total'>+120/mo</span>
      </div>
    </div>

    <div className="summary-routes">
      <Link to='/addons'>Go back</Link>
      <button onClick={navigateToConfirm}>Confirm</button>
    </div>
  </div>
  )
}

export default SummaryYear;