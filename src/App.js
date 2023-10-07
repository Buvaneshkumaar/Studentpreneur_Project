import React from 'react';
import About from "./components/About/index";
import Main from './components/Main/index';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Discussions from './components/Discussions/index';
import Announcements from './components/AdminAnnouncements/index';
import Innovaideas from './components/Innovaideas/index';
import Logout from './components/Logout/index';
import Uploads from './components/Uploads/index';
import MyFiles from './components/shownuploads/shownup';

const App=()=>
{
  return(
/* Main page opens */
/* Main page index.jsx */
    
        <Router>
      {/* <About /> */}
        <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Announcements' element={<Announcements />} />
        <Route path='/Uploads' element={<Uploads/>} />
        <Route path='/MyFiles' element={<MyFiles/>} />
        <Route path='/Discussions' element={<Discussions />} />
        <Route path='/Innovaideas' element={<Innovaideas />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Logout' element={<Logout />} />
        </Routes>
        </Router>




        )
  }

export default App;