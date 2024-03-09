import Course from "../Course/Course";


const Courses = ({courses,totalCreadits}) => {
    
    return (
        <div className="md:w-1/3 text-center mx-4 bg-white py-4 ">
            <h1 className="text-3xl font-bold mb-6">Courses Name</h1>
            
           <div className="border-b-2">
           {
                courses.map((course,idx) => <Course
                key={idx}
                course={course}
                ></Course>)
            }
           </div>

           <h1>Total Creadit Hour : {totalCreadits}</h1>
        </div>
    );
};

export default Courses;