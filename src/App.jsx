
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const[courses,setCourses] = useState([]);

  
  const[totalCreadits,setTotalCreadits] = useState(0);


  const over = () => toast.error("Course time is over!");
  const notify = () => toast.error("This course is previously added!");
  

  const handleTitleList = (blog)=>{
   
    let count = blog.credit;
   
    
    const similerTitle = courses.find(title => title.id == blog.id)
    
    if(similerTitle){
      notify();
    }
    else{
      const newCourses = [...courses,blog];
      setCourses(newCourses);
      courses.forEach(course => count += course.credit);
      setTotalCreadits(count);
     
    }

    
 
  }
  

  return (
    <>
        <Header></Header>
      <div className="md:flex max-w-7xl mx-auto bg-[#F3F3F3]">
        <Blogs
        handleTitleList={handleTitleList}
        ></Blogs>
        <Courses
        courses={courses}
        totalCreadits={totalCreadits}
        ></Courses>

    <ToastContainer
    theme="dark"
     />
   
        </div>
    </>
  )
}

export default App
