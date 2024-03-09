
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blogs = ({handleTitleList}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3 mx-auto md:grid grid-cols-3 gap-6 md:ml-6">
            
            
            {
                blogs.map((blog,idx) => <Blog 
                key={idx} 
                blog={blog}
                handleTitleList={handleTitleList}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;