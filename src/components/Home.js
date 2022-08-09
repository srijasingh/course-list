import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/home.css";

const Home = () => {

    const [courses, setCourses] = useState(null);
    useEffect(()=>{
        const res = fetch("http://localhost:6700/courses", {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setCourses(data);
        });
    },[]);

    return(
        <div>
            <div>
            <div>
                <h3><button type="submit" className="enquiryButton"><Link to={`/enquiries`}>Enquiries</Link></button></h3> 
             </div>
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
        
    );
}

export default Home;