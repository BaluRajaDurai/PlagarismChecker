import React, { useState } from 'react';
import FacultyNavbar from "../../Header/FacultyNavbar";

const Submisson = () => {

    const [visible, setVisible] = React.useState(false);

    const onClick = () => setVisible(!visible);

    return ( 
        <div className="submisson">

            <FacultyNavbar/>
            
            <div class="container text-start mt-5">
               <h3>Submitted Topics : </h3>
            </div>
            <div class="container mt-5">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Student Name</th>
                            <th>Doc Name</th>
                            <th>Branch</th>
                            <th>Submitted On</th>
                            <th>Result</th>
                            <th>Add Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Clark</td>
                            <td>Kent</td>
                            <td>clarkkent@mail.com</td>
                            <td>Clark</td>
                            <td>0%</td>
                            <td>
                            <a href="#" class="link-primary text-decoration-none" onClick={onClick}>{visible ? 'Close' : 'Comment'}</a>
                            {visible && <div>{<Text />}</div>}
                            </td>
                        </tr>
                        <tr>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                            <td>Clark</td>
                            <td>0%</td>
                            <td>
                            <a href="#" class="link-primary text-decoration-none" onClick={onClick}>{visible ? 'Close' : 'Comment'}</a>
                            {visible && <div>{<Text />}</div>}
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                            <td>Clark</td>
                            <td>0%</td>
                            <td>
                            <a href="#" class="link-primary text-decoration-none" onClick={onClick}>{visible ? 'Close' : 'Comment'}</a>
                            {visible && <div>{<Text />}</div>}
                            </td>
                        </tr>                    
                    </tbody>
                </table>
            </div>
            <div class="container text-start mt-5">
                <button type="button" class="btn btn-warning ">Check plagiarism</button>
                <button type="button" class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#sendreport">Send Report</button>
                <button type="button" class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#veiwreview">Veiw Review</button>

                <div class="modal fade" id="sendreport" tabindex="-1" aria-labelledby="sendreportLabel" aria-hidden="true">
                 <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Send a report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3 text-start">
                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                            <input type="text" class="form-control" id="recipient-name" value="@Admin"/>
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
                <div class="modal fade" id="veiwreview" tabindex="-1" aria-labelledby="veiwreviewLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="veiwreviewModalLabel">Reveiws</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card text-dark bg-light mb-3">
                            <div class="card-header">Review From Admin</div>
                            <div class="card-body">
                                <p class="card-text">Check for more plagiarism percentage</p>
                            </div>
                        </div>
                        <div class="card text-dark bg-light mb-3">
                            <div class="card-header">Review From Admin</div>
                            <div class="card-body">
                                <p class="card-text">Please assign retest</p>
                            </div>
                            </div>
                        </div>
                        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
const Text = () => <div class="mt-3"><textarea></textarea>
<svg type="button" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-square ms-2 mb-4 btn-primary" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></div>;
 
export default Submisson;

