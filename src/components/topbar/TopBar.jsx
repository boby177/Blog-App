import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'><Link to='/' className='link'>HOME</Link></li>
                <li className='topListItem'><Link to='/about' className='link'>ABOUT</Link></li>
                <li className='topListItem'><Link to='/contact' className='link'>CONTACT</Link></li>
                <li className='topListItem'><Link to='/write' className='link'>WRITE</Link></li>
                <li className='topListItem'>
                    {user && 'LOGOUT'}
                </li>
            </ul>
        </div>
        <div className='topRight'>
          {
            user ? (
              <img className='topImg' src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="" />
            ) : (
              <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/login' className='link'>LOGIN</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/register' className='link'>REGISTER</Link>            
                </li>
              </ul>
            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
