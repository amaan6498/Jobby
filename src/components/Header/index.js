import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className='nav-container'>
      <Link to='/' className='link-item'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
          alt='website logo'
          className='header-logo'
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/' className='link-style'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/jobs' className='link-style'>
              Jobs
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <button type='button' onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
