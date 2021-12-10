import Navbar from "../Components/Header/Navbar";
import React, { useState,useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FacultyLogin = () => {

    const { register, handleSubmit, errors } = useForm();

    const [facultyInfo, setFacultyInfo] = useState();

    useEffect(()=>{
     
        if(facultyInfo !== undefined)
        {
            // console.log(studentInfo);
            // console.log(Object.keys(studentInfo).length)
            if(Object.keys(facultyInfo).length !== 0)
            {
                doLogin();
            }
            
        }
        
    },[facultyInfo])


    let navigate = useNavigate();

    const onSubmit = (data) => {
        setFacultyInfo(data);
        // console.log(data);
        // doLogin();
        // navigate('/uploadtopic');
    };

    function doLogin(){
        
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:5000/facultydetails', requestOptions)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          
          const p = data.filter((b)=>b.facultymail==facultyInfo.email);
        //   console.log(p.length);
        //   console.log(studentInfo);
        //   console.log(studentInfo.email);
        //   console.log(studentInfo.password);
        
         
          if(p.length == 1 &&  (p[0].facultymail==facultyInfo.email)&&(p[0].facultypassword==facultyInfo.password))
          {
            //   console.log("Success")
              navigate('/uploadtopic');
          }
          else{
            //   console.log("err")
              alert("Please enter correct login details")
          }

        }).catch(function (error) {
          console.log(error);
      })
    }  

    return ( 
        <div className="faculty">
            <Navbar/>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                            <h3 class="d-flex justify-content-start mb-5 fs-5">Faculty Login</h3>
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
 
export default FacultyLogin;