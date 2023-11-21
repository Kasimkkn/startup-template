import { Link } from "react-router-dom"
import logo from '../assets/react.svg'
const SideBar = () => {
  return (
    <nav className="w-24 h-full bg-slate-100 flex flex-col justify-between items-center fixed p-10">
        <div className="">
        <img src={logo} alt="" />
       </div>
       <div className="flex flex-col gap-10">
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

export default SideBar
