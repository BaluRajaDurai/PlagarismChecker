import AdminNavbar from "../../Header/AdminNavbar";

const ViewReport = () => {
    return ( 
        <div className="viewreport">
            <AdminNavbar/>
            <div class="container text-start mt-5">
               <h4>Available Reports : </h4>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">.
                        <div class="card">
                            <div class="card-header">
                                <h5 class="text-start">Report from faculty1</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text text-start mt-3">All students completed test with 30% plagiarism.</p>
                                <a class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addreview">Add Review</a>
                            </div>
                        </div>
                    </div>  
                    <div class="col-6">.
                        <div class="card">
                            <div class="card-header">
                                <h5 class="text-start">Report from faculty2</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text text-start mt-3">Test has been cancelled due to meeting.</p>
                                <a class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addreview" data-bs-whatever="@mdo">Add Review</a>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
            <div class="modal fade" id="addreview" tabindex="-1" aria-labelledby="addreviewLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Write a review</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3 text-start">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@Faculty"/>
                    </div>
                    <div class="mb-3 text-start">
                        <label for="message-text" class="col-form-label ">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>
            </div>
              
        </div>
     );
}
 
export default ViewReport;