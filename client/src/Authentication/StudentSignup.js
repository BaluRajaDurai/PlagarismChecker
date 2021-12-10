import React, { useState,useRef,useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StudentSignup = () => {

  const { register, handleSubmit, errors, watch } = useForm();
  
  const password = useRef({});
  password.current = watch("password", "");
  const [userInfo, setUserInfo] = useState({});

  let navigate = useNavigate();

  useEffect(()=>{
    // console.log(userInfo);
    if(Object.keys(userInfo).length !== 0)
    {
        doSignUp();
    }
  },[userInfo])

  const onSubmit = (data) => {
    setUserInfo(data);
    // console.log(data);  
  };
  // console.log(errors);

  const doSignUp = () => {
    // console.log(userInfo);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentname:userInfo.username,
        studentemail:userInfo.email,
        studentdepartment:userInfo.select,
        studentpassword:userInfo.password,
      }),
    };
    fetch("http://localhost:5000/studentsignup", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        navigate('/studentlogin');
      }).catch(function (error) {
        console.log(error);
    })
  };


    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-2 border-0 shadow rounded-3 overflow-hidden">
  
              <div class="card-body p-2 p-sm-5">
                <h3 class="d-flex justify-content-start mb-5 fs-5">Student Registration</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
				  
					          <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInputUsername" name="username" placeholder="myusername" 
                      ref={register({ 
                      required: "Username is required",
                      pattern:{
                        value: /^[aA-zZ\s]+$/,
                        message:"Enter a valid username"
                      },
                       })} autofocus/>
                      <label for="floatingInputUsername">Student Name</label>
                      <p className="text-danger">{errors.username?.message}</p>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInputEmail" name="email" placeholder="name@example.com"
                      ref={register({
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "This is not a valid email",
                        },
                      })}
                      />
                      <label for="floatingInputEmail">Email Address</label>
                      <p className="text-danger">{errors.email?.message}</p>
                    </div>

                    <div class="form-floating mb-3">
                        <select class="form-select" aria-label="Default select example" id="floatingInputSelect" name="select"  
                        ref={register({
                          required: "Select the department",
                        })}>
                            <option selected value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                        </select>
                        <label for="floatingInputSelect">Department</label>
                        <p className="text-danger">{errors.select?.message}</p>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="floatingPassword" name="password"  placeholder="Password"
                      ref={register({
                        required: "Password is required",
                        minLength: {
                          value: 4,
                          message: "Password must be more than 4 characters",
                        },
                        maxLength: {
                          value: 10,
                          message: "Password cannot exceed more than 10 characters",
                        },
                      })}
                      />
                      <label for="floatingPassword">Password</label>
                      <p className="text-danger">{errors.password?.message}</p>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="floatingPasswordConfirm" name="cnfrmpassword" placeholder="Confirm Password"
                      ref={register({
                        required: "Confirm Password is required",
                        validate: value =>
                          value === password.current || "The passwords do not match"
                      })}/>
                      <label for="floatingPasswordConfirm">Confirm Password</label>
                      <p className="text-danger">{errors.cnfrmpassword?.message}</p>
                    </div>

                    <div class="d-grid mb-2">
                      <button class="btn btn-lg btn-primary text-uppercase" type="submit">Register</button>
                    </div>

                    <hr class="my-4"/>

                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>  

      );
}
 
export default StudentSignup;