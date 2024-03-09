
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
  const[remainingCreadit,setRemainingCreadit] = useState(20);
  const[totalPrice,setTotalPrice] = useState(0);


  const over = () => toast.warn("Course time is over!");
  const notify = () => toast.error("This course is previously added!");
  

  const handleTitleList = (blog)=>{
   
    let count = blog.credit;
    let price = blog.price;
   
    
    const similerTitle = courses.find(title => title.id == blog.id)
    
    if(similerTitle){
      notify();
    }
    else{
      const newCourses = [...courses,blog];
      
      courses.forEach(course => count += course.credit);
      const newRemaining = 20 - count;
      courses.forEach(course => price += course.price)
      
      if(count > 20){
        over();
        return courses;
      }
      else{
        setTotalCreadits(count);
        setCourses(newCourses);
        setRemainingCreadit(newRemaining);
        setTotalPrice(price);
      }
     
    }

    
 
  }
  

  return (
    <>
        <Header></Header>
      <div className="flex flex-col-reverse md:flex md:flex-row max-w-7xl mx-auto bg-[#F3F3F3]">
        <Blogs
        handleTitleList={handleTitleList}
        ></Blogs>
        <Courses
        courses={courses}
        totalCreadits={totalCreadits}
        remainingCreadit={remainingCreadit}
        totalPrice={totalPrice}
        ></Courses>

    <ToastContainer
    theme="colored"
     />
   
        </div>
    </>
  )
}

export default App
