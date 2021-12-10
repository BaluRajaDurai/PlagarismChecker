import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate();

    function logout() {
        navigate('/');
    }

    return ( 
     <div>
        <nav class="navbar navbar-expand-md navbar-light  bg-light pt-3 pb-2">
            <div class="container-xxl">
                
                <p class="navbar-brand">
                <h3 class="text-primary fw-bold text-uppercase pt-3">
                    plagiarism Checker App
                </h3>
                </p>
            
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
        
            
                <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item ps-4">
                            <Link to="/studentlogin" className="text-decoration-none text-success text-uppercase">Student Login</Link>
                        </li>
                        <li class="nav-item ps-4">
                            <Link to="/facultylogin" className="text-decoration-none text-warning text-uppercase">Faculty Login</Link>
                        </li>
                        <li class="nav-item ps-4">
                            <Link to="/adminlogin" className="text-decoration-none text-danger text-uppercase">Admin Login</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                    <button 
                        class="btn btn-danger ms-5" type="submit"
                        onClick={() =>
                            window.confirm("Are you sure you want to logout?") && logout()}>
                                Logout
                    </button>
                </form>
                </div>
            </div>
        </nav>

        <hr  style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: .5,
            borderColor : '#000000'
        }}/>
        
     </div>
     );
}
 
export default Navbar;