import React from "react";
import Navbar from "../Header/Navbar";
import StudentSignup from "../../Authentication/StudentSignup";

const WelcomePage = () => {
    return (  
        <div className="welcome">
            <Navbar/>
            <div class="my-5">
                <h2>
                    Check out — Welcome To plagiarism Checker App!
                </h2>
                <h3 class="text-secondary fs-3">
                    If you are new user please register else login...
                </h3>
            </div>
            <div>
                <StudentSignup/>
            </div>
        </div>
    );
}
 
export default WelcomePage;