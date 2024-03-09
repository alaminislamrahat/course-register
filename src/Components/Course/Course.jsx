import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {title} = course;
    
    return (
        <div className="">
            <h3 className="my-2">title{title}</h3>
            
        </div>
    );
};

Course.propTypes = {
    course : PropTypes.object.isRequired,
}
export default Course;