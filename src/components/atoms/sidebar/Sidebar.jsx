import './sidebar.scss'
import {
  FaBox,
  FaBoxes,
  FaChartBar,
  FaChartPie,
  FaReceipt,
  FaRegListAlt,
  FaSignOutAlt,
  FaUser,
  FaUserAstronaut,
  FaUserCog,
  FaUserFriends,
  FaUsers,
  FaWarehouse,
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../../src/commons/assets/logo.png'

const Sidebar = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              maxWidth: '100%',
              width: '20rem',
              height: '6.4rem',
            }}
          />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">SETTING</p>
          <Link to="/user" style={{ textDecoration: 'none' }}>
            <li>
              <FaUsers className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/role" style={{ textDecoration: 'none' }}>
            <li>
              <FaUserCog className="icon" />
              <span>Role</span>
            </li>
          </Link>
          <Link to="/logs" style={{ textDecoration: 'none' }}>
            <li>
              <FaRegListAlt className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <p className="title">ORDER</p>
          <Link to="/order" style={{ textDecoration: 'none' }}>
            <li>
              <FaReceipt className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <p className="title">MANAGE</p>
          <Link to="/productGroup" style={{ textDecoration: 'none' }}>
            <li>
              <FaBoxes className="icon" />
              <span>Product Groups</span>
            </li>
          </Link>
          <Link to="/product" style={{ textDecoration: 'none' }}>
            <li>
              <FaBox className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/customerGroup" style={{ textDecoration: 'none' }}>
            <li>
              <FaUserFriends className="icon" />
              <span>Customer Groups</span>
            </li>
          </Link>
          <Link to="/customer" style={{ textDecoration: 'none' }}>
            <li>
              <FaUser className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/warehouse" style={{ textDecoration: 'none' }}>
            <li>
              <FaWarehouse className="icon" />
              <span>Warehouse</span>
            </li>
          </Link>
          <p className="title">REPORT</p>
          <Link to="/businessReport" style={{ textDecoration: 'none' }}>
            <li>
              <FaChartBar className="icon" />
              <span>Business Report</span>
            </li>
          </Link>
          <Link to="/systemReport" style={{ textDecoration: 'none' }}>
            <li>
              <FaChartPie className="icon" />
              <span>System Report</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <FaUserAstronaut className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleSignOut}>
            <FaSignOutAlt className="icon" />
            <span>Sign out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar
