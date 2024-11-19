import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { AllPostsPageRoute } from '../assets/Routes';

const Home = () => {
    return (
        <section className="h-screen max-w-[var(--maxWidth)] pt-12 flex items-center flex-col gap-6">
            <motion.header initial={{scale:0.1}} animate={{scale:1}} transition={{duration: 0.4}} className="text-5xl font-semibold">Your personalized <span className='bg-gradient-to-br from-blue-300 to-pink-400 bg-clip-text text-transparent font-extrabold text-6xl'>Blog Finder</span></motion.header>

            <Link to={AllPostsPageRoute}>
                <motion.button initial={{scale:0.1}} animate={{scale:1}} transition={{duration: 0.4}} whileHover={{scale:1.1 ,backgroundColor: "rgb(230,230,230)"}} whileTap={{scale: 0.88}} className='h-[3rem] bg-white text-black border-none outline-none text-lg px-14'>Go to All Blogs</motion.button>
            </Link>
        </section>
    )
}

export default Home;