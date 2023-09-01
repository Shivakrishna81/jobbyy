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
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          alt="website logo"
          className="headerLogo"
        />
      </Link>
      <ul className="sections">
        <li className="para">
          <Link to="/" className="para">
            Home
          </Link>
        </li>

        <li className="para">
          <Link to="/jobs" className="para">
            Jobs
          </Link>
        </li>
      </ul>
      <button type="button" onClick={onClickLogout} className="logout">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
