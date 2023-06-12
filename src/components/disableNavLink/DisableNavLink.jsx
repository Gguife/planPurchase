import { NavLink } from 'react-router-dom'

  const DisableNavLink = ({to, children, ...rest}) => {
    const handleClick = (e) => {
      e.preventDefault()
    }
    
    return (
      <NavLink to={to} {...rest} onClick={handleClick} >
        { children }
      </NavLink>
    )
  
  }


export default DisableNavLink