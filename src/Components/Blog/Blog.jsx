import { IoBookOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from 'prop-types';


const Blog = ({ blog,handleTitleList }) => {
    const {  cover, title, description, price, credit } = blog;
    return (
        <div className="py-4 bg-white px-2 py-2">

        <img src={cover}alt="" />
        <h1 className="text-lg font-bold my-2">{title}</h1>
        <p>{description}</p>
        <div className="my-4 flex justify-evenly">
            <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>
            <p>Price : {price}</p>
            <IoBookOutline className="text-2xl"></IoBookOutline>
            <p>Creadit : {credit}</p>
        </div>
        <button 
        onClick={()=>handleTitleList(blog)}
        className="btn bg-blue-400 w-full text-white text-xl hover:bg-red-600">Accent</button>

        </div>
    );
};


Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleTitleList:PropTypes.func.isRequired,
}
export default Blog;