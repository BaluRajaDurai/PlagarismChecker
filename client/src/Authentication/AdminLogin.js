import Navbar from "../Components/Header/Navbar";
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const { register, handleSubmit, errors} = useForm();

    const [adminInfo, setAdminInfo] = useState();

    let navigate = useNavigate();

    useEffect(()=>{
        //console.log(adminInfo);
        if(adminInfo !== undefined)
        {
            doLogin();
            
        }
      },[adminInfo])
        

    const onSubmit = (data) => {
        setAdminInfo(data);
        //console.log(data);
    };

    const doLogin = () => {
        //console.log(adminInfo);
        //console.log(adminInfo.email)
        if(adminInfo.email==="admin123@gmail.com" && adminInfo.password==="admin2021")
        {
            navigate('/addfaculty');
        }
        else{
            alert("Enter Correct Login Details");
        }
        
    };


    return (  
        <div className="admin">
            <Navbar/>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                            <h3 class="d-flex justify-content-start mb-5 fs-5">Admin Login</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com"
                                        ref={register({
                                            required: "Email is required",
                                            pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "This is not a valid email",
                                            },
                                        })}/>
                                        <label for="floatingInput">Email Address</label>
                                        <p className="text-danger">{errors.email?.message}</p>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password"
                                        ref={register({
                                            required: "Password is required"
                                        })}/>
                                        <label for="floatingPassword">Password</label>
                                        <p className="text-danger">{errors.password?.message}</p>
                                    </div>
                        
                                    <div class="form-check mb-3">
                                        {/* <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                        Remember password
                                        </label> */}
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-login text-uppercase" type="submit">Login</button>
                                    </div>
                                    <hr class="my-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}
 
export default AdminLogin;