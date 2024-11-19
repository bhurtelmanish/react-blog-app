import { NavLink , Link } from 'react-router-dom';
import { AllPostsPageRoute, HomePageRoute } from '../assets/Routes';
import '../index.css'
import { motion } from 'framer-motion'

const Navbar = () => {

    const navLinkActiveStyle = ({ isActive }) => {
        return {
            color: isActive ? "#B8A9E5" : "white"
        }
    }

    return(
        <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.6}} className="flex justify-between items-center h-[var(--navbarHeight)] w-full border-gray-600  border-b-[0.5px]">
            <Link to={HomePageRoute}><div className="font-semibold text-2xl">Blog Finder</div></Link>
            
            <ul className='flex gap-4'>
                <NavLink to={HomePageRoute} style={navLinkActiveStyle}>
                    <li className='text-[0.9rem] cursor-pointer hover:text-gray-300'>Home</li>
                </NavLink>
                <NavLink to={AllPostsPageRoute} style={navLinkActiveStyle}>
                    <li className='text-[0.9rem] cursor-pointer hover:text-gray-300'>Posts</li>
                </NavLink>
            </ul>
        </motion.nav>
    )
}

export default Navbar;