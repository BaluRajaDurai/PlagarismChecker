import StudentNavbar from "../../Header/StudentNavbar";

const Comments = () => {
    return ( 
        <div className="comments">
            <StudentNavbar/>
            <div class="container text-start mt-5">
               <h4>Comments : </h4>
            </div>
            <div class="container mt-5">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Comment From <span class="ms-2"> Faculty </span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <div class="text-start">
                                    <p class="fw-bolder">Topic Name : <span class="fw-normal">Robotics</span> </p> 
                                </div>
                                <div class="text-start">
                                    <p class="fw-bolder">Document Name :  <span class="fw-normal">18CSE08_Robotics</span> </p> 
                                </div>
                                <div class="text-start">
                                    <p class="fw-bolder">Comment : </p>
                                    <span class="fw-normal">Check for plagarism</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Comments;