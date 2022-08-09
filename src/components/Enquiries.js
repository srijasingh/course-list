import React, { useEffect, useState } from "react";
import "../css/enquiry.css";

const Enquiries = () => {
    const [enquiry, setEnquiry] = useState();

    useEffect(()=>{
        const res = fetch("http://localhost:6700/enquiriesList", {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setEnquiry(data);
        });
    },[]);
    return(
        <div>
            <div className="enquiry-header"><h2><center>Enquiries</center></h2></div>
            {enquiry?.map((item)=>{
                return(
                    <div className="enquiries">
                        <p><b>Enquirer email :</b> {item.email}</p>
                        <p><b>Course Enquired for :</b> {item.coursesEnquired}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Enquiries;