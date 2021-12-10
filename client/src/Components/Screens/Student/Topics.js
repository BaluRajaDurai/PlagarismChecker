import React, { useRef,useEffect,useState } from 'react';
import axios from 'axios';
import StudentNavbar from "../../Header/StudentNavbar";

const Topics = () => {

    const [topicInfo, setTopicInfo] = useState({});

    const [file, setFile] = useState("");

    const documentEl = React.useRef(null);

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
        
    })

    const uploadFile = async (e,b) => {
    
        console.log(b)
        const files = e.target.files
        const data = new FormData()

        data.append('file',files[0])
        data.append('upload_preset','fileupload')
    

        const res = await fetch("https://api.cloudinary.com/v1_1/plagiarismchecker/image/upload",
        {
            method:'POST',
            body:data
        })

        const file = await res.json();

        console.log(file);
        console.log(file.original_filename)
        console.log(topicInfo)

        setFile(file.secure_url)

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify({ docname: file.original_filename })
        };
            
            fetch('http://localhost:5000/updatetopic/'+b, requestOptions)
            .then(response => response.text())
            .then(data => {
                if(!data.error){
                    console.log(data);
                    // window.location.reload();
                }
                else{
                    // toast.error(data.error,{autoClose:2000})
                    console.log("error");
                }
            })
        
         
    };
    
    const handleSubmit = e => {

        e.preventDefault();

        // const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       topic:topicEl.current.value,
        //       sub:branchEl.current.value,
        //       sbranch:subjectEl.current.value,
        //       edate:dateEl.current.value,
        //       dtime:time,
        //       docname:
        //     }),
        //   };
        //   fetch("http://localhost:5000/topic", requestOptions)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         alert("Topic Saved")
                
        //     }).catch(function (error) {
        //       console.log(error);
        //   })


         
    };

    const DataTable = () => {

        if(topicInfo !== undefined)
        {
            // console.log(topicInfo);
            // console.log(Object.keys(topicInfo).length)
            if(Object.keys(topicInfo).length !== 0)
            {
                {return topicInfo.map(a =>
                    <tr>   
                        <td>{a.topicname}</td>
                        <td>{a.subject}</td>
                        <td>{a.lastdate.split('T')[0]}</td>
                        <td>{a.duetime}</td>
                        <td>faculty</td>
                        <td><input type="file" id="myFile" name="filename" ref={documentEl} onChange={(e)=>uploadFile(e,a._id)}/></td>
                    </tr>
                )}
            }else{
                {return <p class=" mt-3 fs-5 text-secondary"> No Topics Added </p> }
                
            }
            
        }

    };


    return (  

        <div className="topics">
            <StudentNavbar/>
            <div class="container text-start mt-5">
               <h4>Welcome, Student</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="container mt-5">
                    <table class="table table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>Topic Name</th>
                                <th>Subject</th>
                                <th>End Date</th>
                                <th>Due Time</th>
                                <th>Faculty Name</th>
                                <th>Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DataTable()}                     
                        </tbody>
                    </table>
                </div>
                <div class="d-grid gap-2 col-1 mx-auto mt-5">
                    <button class="btn btn-primary" type="button" type="submit">Upload</button>
                </div>            
            </form>  
        </div>
    );
}
 
export default Topics;