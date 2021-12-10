import React, { useRef,useEffect,useState } from 'react';
import AdminNavbar from "../../Header/AdminNavbar";

const AddFaculty = () => {

    const nameEl = React.useRef(null);
    const selectEl = React.useRef(null);
    const emailEl = React.useRef(null);
    const passwordEl = React.useRef(null);

    const [facultyInfo, setFacultyInfo] = useState({});

    useEffect(()=>{
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:5000/facultydetails', request)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          setFacultyInfo(data);
         
        }).catch(function (error) {
          console.log(error);
      })
        
    },[])



    const handleSubmit = e => {
        e.preventDefault();

        // console.log(nameEl.current.value);
        // console.log(selectEl.current.value);
        // console.log(emailEl.current.value);
        // console.log(passwordEl.current.value);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              facultyname:nameEl.current.value,
              facultydepartment:selectEl.current.value,
              facultymail:emailEl.current.value,
              facultypassword:passwordEl.current.value,
            }),
          };
          fetch("http://localhost:5000/addfaculty", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                alert("Faculty Saved")
                window.location.reload();
            }).catch(function (error) {
              console.log(error);
          })
         
    };

    const DataTable = () => {

        if(facultyInfo !== undefined)
        {
            // console.log(studentInfo);
            // console.log(Object.keys(studentInfo).length)
            if(Object.keys(facultyInfo).length !== 0)
            {
                {return facultyInfo.map(e =>
                    <tr>   
                        <td>{e.facultyname}</td>
                        <td>{e.facultydepartment}</td>
                        <td>{e.facultymail}</td>
                        <td class="text-danger">
                        <a href="#" class="link-danger" onClick={() => window.confirm("Are you sure you want to delete?") && deleteStudent(e.facultymail)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </a>
                            
                        </td>
                    </tr>
                )}
            }else{
                {return <tr>
                    <td></td>
                    <td class="d-flex justify-content-center mt-3 fs-5 text-secondary"> No Faculties Added </td>  
                    <td></td>  
                    <td></td>      
                </tr>
                }
                
            }
            
        }

    };

      const deleteStudent = (id) => {
        
         console.log(id);
        const requestOptions = {
            method: 'DELETE'
            // headers: { 'Content-Type': 'application/json' },
        };
            
            fetch('http://localhost:5000/deletefaculty/'+id, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(!data.error){
                    // console.log(data);
                    window.location.reload();
                }
                else{
                    // toast.error(data.error,{autoClose:2000})
                    console.log("error");
                }
            })

      };

    return ( 
        <div className="addfaculty">
            <AdminNavbar/>

            <div class="container text-start mt-5">
               <h4>Welcome, Admin</h4>
            </div>


            <div class="container mt-5">
                <a href="" class="link-success fs-5 text-decoration-none text-uppercase" data-bs-toggle="modal" data-bs-target="#addfaculty">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle mb-1" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <span class="ps-2 ">Add Faculty</span>
                </a>    
                {/* Modal  */}
                <div class="modal fade " id="addfaculty" tabindex="-1" aria-labelledby="addfaculty" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addfaculty">Add Faculty</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="row  needs-validation"  onSubmit={handleSubmit} novalidate>
                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustomUsername" class="form-label">Faculty Name</label>
                                        <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="validationCustomUsername" ref={nameEl} aria-describedby="inputGroupPrepend" placeholder="Ener a name" required/>
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustom04" class="form-label">Department</label>
                                        <select class="form-select" id="validationCustom04" ref={selectEl} required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="CSE">CSE</option>
                                            <option value="IT">IT</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EEE">EEE</option>
                                        </select>
                                        <div class="invalid-feedback">
                                        Please select a department.
                                        </div>
                                    </div>

                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustomEmail" class="form-label text-start">Faculty Email</label>
                                        <div class="input-group has-validation">
                                        <input type="email" class="form-control" id="validationCustomEmail" ref={emailEl} aria-describedby="inputGroupPrepend" placeholder="Ener a email" required/>
                                        <div class="invalid-feedback">
                                            Please choose a email.
                                        </div>
                                        </div>
                                    </div>
        
                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustom05" class="form-label">Password</label>
                                        <input type="password" class="form-control"  ref={passwordEl} id="validationCustom05" placeholder="Ener a password" required/>
                                        <div class="invalid-feedback">
                                        Please provide a password.
                                        </div>
                                    </div>
                                    <div class="modal-footer mt-5">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" type="submit">Add Faculty</button>
                                    </div>
                                </form>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-start mt-5">
               <h4>Added Faculties : </h4>
               <div class="container mt-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Faculty Name</th>
                                <th scope="col">Faculty Department</th>
                                <th scope="col">Faculty Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DataTable()}
                        </tbody>
                    </table>
               </div>
            </div>
            
        </div>
     );
}
 
export default AddFaculty;