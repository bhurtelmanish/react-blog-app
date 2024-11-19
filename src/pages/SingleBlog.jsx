import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SingleBlog = () => {
    const { postId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://dev.to/api/articles/${postId}`);
                const result = await response.json();
                setBlog(result);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [postId]);

    if (loading) {
        return <div className="text-2xl font-semibold text-center">Loading blog...</div>;
    }

    if (!blog) {
        return <div className="text-2xl font-semibold text-center">Blog not found.</div>;
    }

    return (
        <section  className="h-screen flex flex-col  gap-4 p-8">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <a href={blog.cover_image} target="_blank"><motion.img initial={{scale:0.1}} animate={{scale:1}} transition={{duration: 0.2}} src={blog.cover_image} alt={blog.title} className="h-auto w-full cursor-pointer" /></a>
            <p className="text-lg text-gray-500">{blog.description}</p>
            <Link to="/posts">
                <motion.button
                    initial={{ scale: 0.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgb(230,230,230)" }}
                    whileTap={{ scale: 0.9 }}
                    className="h-[2.8rem] bg-white text-black border-none outline-none text-lg px-10"
                >
                    Go Back
                </motion.button>
            </Link>
        </section>
    );
};

export default SingleBlog;