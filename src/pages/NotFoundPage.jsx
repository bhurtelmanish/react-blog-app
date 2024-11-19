import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AllPostsPageRoute } from "../assets/Routes";
import { motion } from "framer-motion";


const NotFoundPage = () => {
    return (
        <section className="flex items-center flex-col  h-[calc(100vh-70px)] gap-5 justify-center pb-56">
            <motion.div initial={{scale:0.1}} animate={{scale:1}} transition={{duration: 0.3}} className="flex items-center  flex-col">
                <div className="text-6xl font-semibold flex gap-4">
            404 not found <PiFileMagnifyingGlassFill />
                </div>

                <div className="font-light text-md text-gray-400">The page you are looking for might not exist or has been terminated. Sorry!!!</div>
            </motion.div>

            <Link to={AllPostsPageRoute}>
                <motion.button initial={{scale:0.1}} animate={{scale:1}} transition={{duration: 0.2}} whileHover={{scale:1.05 ,backgroundColor: "rgb(230,230,230)"}} whileTap={{scale: 0.9}} className='h-[2.8rem] bg-white text-black border-none outline-none text-lg px-10'>Go Back</motion.button>
            </Link>
        </section>
    )
}

export default NotFoundPage;