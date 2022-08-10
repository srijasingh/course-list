import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/enquiry.css";
import { getCoursesData, getEnquiriesData } from "../redux/actions";

const Enquiries = () => {
    const dispatch = useDispatch();
    const {
        enquiries,
    } = useSelector((state)=> ({
        enquiries: state?.Reducer?.enquiries
    }));

    useEffect(()=>{
        dispatch(getEnquiriesData());
    },[]);

    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [message,setMessage] = useState("");

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnChangeCourse = (e) => {
        setCourse(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email && course){
            console.log("email", email,course);
            const res = await fetch("http://localhost:6700/enquiriesList", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    coursesEnquired: course
                }),
        }).then((res) => {
            setMessage("Enquiry successfully submitted");
        })
    }}

    return(
        <div>
            <button type="submit" style={{marginLeft:"30px", marginTop:"20px"}}><Link to={`/`}>Home</Link></button>
            <div className="display-enquiry">
            <div className="enquiry-header" style={{marginLeft:"33%"}}><h2>Existing Enquiries</h2></div>
            {enquiries?.map((item)=>{
                return(
                    <div className="enquiries">
                        <p><b>Enquirer email :</b> {item.email}</p>
                        <p><b>Course Enquired for :</b> {item.coursesEnquired}</p>
                    </div>
                );
            })}
            </div>
            <div className="new-enquiry">
                <h2>New Enquiry for the course</h2>

                <form onSubmit={handleSubmit}>
                    <p>Username : <input type="text" value = {email} name="email" placeholder="Username" onChange={handleOnChangeEmail}></input></p>
                    <p>Course Name : <input type="text" value = {course} name="course" placeholder="Course Name" onChange={handleOnChangeCourse}></input></p>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Enquiries;