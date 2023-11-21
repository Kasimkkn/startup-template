import { Link } from "react-router-dom";
import logo from '../assets/react.svg'
const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-slate-100 p-5">
       <div className="logo">
        <img src={logo} alt="" />
       </div>
       <div className="flex gap-10">
       <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/service'>Service</Link>
       </div>
       <div>
        <Link to='/login'>Login</Link>
       </div>
    </nav>
  )
}

export default Header
