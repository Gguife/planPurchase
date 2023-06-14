import './Menu.css'
import DisableNav  from '../disableNavLink/DisableNavLink'

const Menu = () => {
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
        <DisableNav exact='true' to='/plan' className='menu-numberPage' activeclassname='active'>
            <p>2</p>
        </DisableNav>
        <div className="menu-descPage">
          <h3>STEP 2</h3>
          <p>Select Plan</p>
        </div>
      </div>
      <div className="menu-content">
        <DisableNav exact='true' to='/addons' className='menu-numberPage' activeclassname='active'>
            <p>3</p>
        </DisableNav>
        <div className="menu-descPage">
          <h3>STEP 3</h3>
          <p>Add-ONS</p>
        </div>
      </div>
      <div className="menu-content">
        <DisableNav exact='true' to='/summary' className='menu-numberPage' activeclassname='active'>
            <p>4</p>
        </DisableNav>
        <div className="menu-descPage">
          <h3>STEP 4</h3>
          <p>Summary</p>
        </div>
      </div>
    </div>
  )
}

export default Menu