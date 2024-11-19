import { useEffect, useState } from "react";
import BlogPostCard from "../Components/BlogPostCard";
import { motion } from "framer-motion";


const Blogs = () => {

    const [blogPosts , setBlogPosts] = useState([]);

    const [blogLoading , setBlogLoading] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            setBlogLoading(true);
            const response = await fetch("https://dev.to/api/articles");
            const result = await response.json();
            setBlogLoading(false);
            setBlogPosts(result);
        }

        fetchBlogs();
    } , [])

    return blogLoading ? <div className="text-2xl font-semibold text-center  w-full flex justify-center items-center h-screen">Loading...</div> :

        <section className="h-auto max-w-[var(--maxWidth)] pt-12 flex items-center flex-col gap-10">
            <header className="text-5xl font-semibold flex flex-col items-center">All Blogs here
                <div className="text-[1rem] mt-2 font-normal text-gray-400 text-center">View your favourite blog in no time. We got all the latest blogs that you need.</div>
            </header>

            <motion.div className="flex flex-wrap gap-4 h-auto w-full justify-center">
                {
                    blogPosts.map((post , index) => {
                        return <BlogPostCard key={index} index={index} id={post.id} image={post.cover_image} title={post.title} description={post.description} readingTime={post.reading_time_minutes} />
                    })
                }
            </motion.div>
        </section>
}

export default Blogs;