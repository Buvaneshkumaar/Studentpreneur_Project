import './Main.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineBars} from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
 
 
const Main =()=>
{
return(
   <nav className='navbar'>
    <div className='container'>
    <h3 className='logo'><FaHandshake size={60}/>Studentpreneur</h3>

    <ul className='nav-links'>
       <li><Link to='/Announcements'>Announcements</Link></li>
       <li><Link to='/Uploads'>Upload Files</Link></li>
       <li><Link to='/MyFiles'>My Files</Link></li>
       <li><Link to='/Discussions'>Discussions</Link></li>
       <li><Link to='/Innovaideas'>Innovaideas</Link></li>
     
       <li><Link to='/Logout'>Logout</Link></li>
       <li><Link to='/MyProfile'>MyProfile</Link></li>
    </ul>
<button className='menu-icon'>
    <AiOutlineBars/>
</button>

    </div>
   </nav>
  
);
}
export default Main;