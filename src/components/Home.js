import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCoursesData } from "../redux/actions";
import "./../css/home.css";

const Home = () => {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => ({
        courses: state?.Reducer?.courses
    }));

    useEffect(()=>{
        dispatch(getCoursesData());
    },[]);

    // const [courses, setCourses] = useState(null);
    // useEffect(()=>{
    //     const res = fetch("http://localhost:6700/courses", {
    //         method: "GET"
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setCourses(data);
    //     });
    // },[]);

    return(
        <div>
            <div>
            <div>
                <h3><button type="submit" style={{marginLeft:"30px"}}><Link to={`/enquiries`}>Enquiries</Link></button></h3> 
             </div>
             <div className="course-div">
            <h2><center>Courses Offered</center></h2>
            {courses?.map((list)=>{ return(
                <div className="courses">
                <div className="courseId">Course ID : {list.id}</div>
                <div className="courseName">Course Name : {list.courseName}</div>
                <div className="time">Time Duration : {list.duration}</div>
                <div className="price">Price : {list.price}</div>

                <button type="submit"><Link to={`/form/${list.courseName}`} state={{ name: `${list.courseName}`}} >Enquire</Link></button>
                </div>
            )
            })}
            </div>
            </div>
        </div>
        
    );
}

export default Home;