import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import WelcomePage from './Components/Screens/WelcomePage'
import StudentLogin from './Authentication/StudentLogin';
import FacultyLogin from './Authentication/FacultyLogin';
import AdminLogin from './Authentication/AdminLogin';
import AddFaculty from './Components/Screens/Admin/AddFaculty';
import ViewReport from './Components/Screens/Admin/ViewReport';
import UploadTopic from './Components/Screens/Faculty/UploadTopic';
import Submisson from './Components/Screens/Faculty/Submisson';
import Topics from './Components/Screens/Student/Topics';
import Comments from './Components/Screens/Student/Comments';

function App() {

  return (
  
    <div className="App">     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/facultylogin" element={<FacultyLogin />} /> 
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/addfaculty" element={<AddFaculty/>} />
          <Route path="/viewreport" element={<ViewReport/>} />
          <Route path="/uploadtopic" element={<UploadTopic/>} />
          <Route path="/submisson" element={<Submisson/>} />
          <Route path="/topics" element={<Topics/>} />
          <Route path="/comments" element={<Comments/>} />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
