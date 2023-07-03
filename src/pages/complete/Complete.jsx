import './Complete.css';
import Confirm from '../../assets/icon-thank-you.svg';

const Complete = () => {
  return (
    <div className='complete'>
      <img src={Confirm} alt="" />
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Complete;