import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({courses,totalCreadits,remainingCreadit,totalPrice}) => {
    
    return (
        <div className="md:w-1/3 text-center mx-4 bg-white py-4 ">
            <h1 className="text-xl text-blue-600 border-b-2 font-bold py-4">Creadit Hour Remaining : {remainingCreadit} hr</h1>
            <h1 className="text-3xl font-bold mb-6">Courses Name</h1>
            
           <div className="border-b-2">
           {
                courses.map((course,idx) => <Course
                key={idx}
                course={course}
                ></Course>)
            }
           </div>

           <h1 className="text-xl font-bold py-2 border-b-2 text-center">Total Creadit Hour : {totalCreadits}</h1>

           <h1 className="text-xl font-bold py-4">Total Price : {totalPrice} USD</h1>
        </div>
    );
};


Courses.propTypes = {
    courses : PropTypes.object.isRequired,
    totalCreadits: PropTypes.number.isRequired,
    remainingCreadit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
}
export default Courses;