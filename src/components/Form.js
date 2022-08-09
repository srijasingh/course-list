import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Form = () => {

    const [mess,setMess] = useState("");

    const location = useLocation();
    const { name } = location.state;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [courseList, setCourseList] = useState([]);

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
        setCourseList([name]);
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email && password){
            console.log("email", email,password);
            const res = await fetch("http://localhost:6700/userDetails", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
        }).then((res) => {
            setMess("User Created");
        })
        
        const res2 = await fetch("http://localhost:6700/enquiriesList", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    coursesEnquired: courseList
                }),
        }).then((res2) => {
            setEmail(null);
            setPassword(null);
            setCourseList(null);
        })

        }
    }
    console.log("mess".mess);

    return(
        <div className="enquiryForm" style={{margin:"50px 100px"}}>
            <h2>Enquiry for the course: {name}
            </h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
            <p>Username : <input type="text" value = {email} name="email" placeholder="Username" onChange={handleOnChangeEmail}></input></p>
            <p>Password: <input type="text" value = {password} name="password" placeholder="Password" onChange={handleOnChangePassword}></input></p>
            <button type="submit">Submit</button>
            </form>
            <div>
                {mess}
            </div>

        </div>
    );
}

export default Form;