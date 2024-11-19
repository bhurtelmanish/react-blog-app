import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogPostCard = ({ id ,image , title , description , index ,readingTime}) => {
    if(image){
        const titleWordLength = 4;
        const titleWords = title.split(" ");
        const descriptionWordLength = 12;
        const descriptionWords = description.split(" ");
        return (
            <Link to={`/posts/${id}`}> 
            <motion.div  initial={{scale:0.1}} animate={{scale:1}} transition={{duration: 0.2}}   whileHover={{scale: 1.03}} whileTap={{scale: 0.9}} className="w-[22rem] flex flex-col items-center bg-[rgb(20,20,20)] cursor-pointer pb-8">
                <img src={image} alt="Blog post image" className="h-auto w-full" />
                <div className="px-2">
                    <div className="flex justify-between w-full py-4">
                        <header className="font-semibold text-lg">{titleWords.length > titleWordLength ? titleWords.slice(0 , titleWordLength).join(" ") + "..." : title}</header>
                        <div className="text-pink-500">{readingTime} min</div>
                    </div>
                    <div className="font-extralight text-sm">{descriptionWords.length > descriptionWordLength ? descriptionWords.slice(0, descriptionWordLength).join(" ") + "..." : description }</div>
                </div>
            </motion.div>
             </Link>
        )
    }
}

export default BlogPostCard;