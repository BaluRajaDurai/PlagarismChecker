import React, { useRef,useEffect,useState } from 'react';
import FacultyNavbar from "../../Header/FacultyNavbar";

const UploadTopic = () => {

    const topicEl = React.useRef(null);
    const subjectEl = React.useRef(null);
    const branchEl = React.useRef(null);
    const dateEl = React.useRef(null);
    const timeEl = React.useRef(null);

    const [topicInfo, setTopicInfo] = useState({});

    useEffect(()=>{

        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:5000/topicdetails', request)
        .then((response) => response.json())
        .then((data) => {
        //console.log(data);
          setTopicInfo(data);
         
        }).catch(function (error) {
          console.log(error);
      })
        
    },[])

    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? ' AM ' : ' PM '; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    }


    const handleSubmit = e => {
        e.preventDefault();

        // console.log(topicEl.current.value);
        // console.log(branchEl.current.value);
        // console.log(dateEl.current.value);
        // console.log(timeEl.current.value);

        const time=tConvert(timeEl.current.value)

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              topicname:topicEl.current.value,
              branch:branchEl.current.value,
              subject:subjectEl.current.value,
              lastdate:dateEl.current.value,
              duetime:time,
            }),
          };
          fetch("http://localhost:5000/addtopic", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                alert("Topic Saved")
                window.location.reload();
            }).catch(function (error) {
              console.log(error);
          })
         
    };

    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      }


    const DataTable = () => {

        if(topicInfo !== undefined)
        {
            // console.log(topicInfo);
            // console.log(Object.keys(topicInfo).length)
            if(Object.keys(topicInfo).length !== 0)
            {
                {return topicInfo.map(e =>
                    <tr>   
                        <td>{e.topicname}</td>
                        <td>{e.subject}</td>
                        <td>{e.branch}</td>
                        <td>{(e.duetime)}</td>
                        <td>{e.lastdate.split('T')[0]}</td>
                        <td class="text-danger">
                        <a href="#" class="link-danger" onClick={() => window.confirm("Are you sure you want to delete?") && deleteTopic(e.topicname)} >
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
                    <td class="d-flex justify-content-center mt-3 fs-5 text-secondary"> No Topics Added </td>  
                    <td></td>  
                    <td></td>      
                </tr>
                }
                
            }
            
        }

    };


    const deleteTopic = (id) => {
        
        // console.log(id);
       const requestOptions = {
           method: 'DELETE'
           // headers: { 'Content-Type': 'application/json' },
       };
           
           fetch('http://localhost:5000/deletetopic/'+id, requestOptions)
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
        <div className="addtopic">
            <FacultyNavbar/>

            <div class="container text-start mt-5">
               <h4>Welcome, Faculty</h4>
            </div>


            <div class="container mt-5">
                <a href="#" class="link-success fs-5 text-decoration-none text-uppercase" data-bs-toggle="modal" data-bs-target="#addfaculty">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle mb-1" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <span class="ps-2 ">Add Topic</span> 
                </a>    
                {/* Modal  */}
                <div class="modal fade " id="addfaculty" tabindex="-1" aria-labelledby="addfaculty" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addfaculty">Add Topic</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="row  needs-validation" onSubmit={handleSubmit} novalidate>
                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustomUsername" class="form-label">Topic Name</label>
                                        <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="validationCustomUsername" ref={topicEl} aria-describedby="inputGroupPrepend" placeholder="Ener a name" required/>
                                        <div class="invalid-feedback">
                                            Please choose a topic.
                                        </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustomUsername" class="form-label">Subject</label>
                                        <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="validationCustomSubject" ref={subjectEl} aria-describedby="inputGroupPrepend" placeholder="Ener a subject" required/>
                                        <div class="invalid-feedback">
                                            Please choose a subject.
                                        </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustom04" class="form-label">Select Branch</label>
                                        <select class="form-select" id="validationCustom04" ref={branchEl} required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="CSE">CSE</option>
                                            <option value="IT">IT</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EEE">EEE</option>
                                        </select>
                                        <div class="invalid-feedback">
                                        Please select a branch.
                                        </div>
                                    </div>

                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustomEmail" class="form-label text-start">Due Time</label>
                                        <div class="input-group has-validation">
                                        <input type="time" class="form-control" id="inputMDEx1" ref={timeEl} aria-describedby="inputGroupPrepend" placeholder="Ener a time" required/>
                                        <div class="invalid-feedback">
                                            Please choose a time.
                                        </div>
                                        </div>
                                    </div>


                                    <div class="col-md-12 text-start mt-3">
                                        <label for="validationCustomEmail" class="form-label text-start">End Date</label>
                                        <div class="input-group has-validation">
                                        <input type="date" class="form-control" id="validationCustomDate" ref={dateEl} aria-describedby="inputGroupPrepend" placeholder="Ener a date" required/>
                                        <div class="invalid-feedback">
                                            Please choose a date.
                                        </div>
                                        </div>
                                    </div>

                                    <div class="modal-footer mt-5">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" type="submit">Add Topic</button>
                                    </div>
                                </form>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-start mt-5">
               <h4>Added Topics : </h4>
               <div class="container mt-3">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Topic Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Due Time</th>
                            <th scope="col">End Date</th>
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
 
export default UploadTopic;