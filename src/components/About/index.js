import './About.css';
import React from 'react';
import {Link} from 'react-router-dom';

import { FaHandshake } from 'react-icons/fa';
 
 
const About =()=>
{
return(
   <><nav className='navbar'>
        <div className='container'>
            <h3 className='logo'><FaHandshake size={60} />Studentpreneur</h3>

            <ul className='nav-links'>

                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/Signup'>Signup</Link></li>

            </ul>
            
        </div>
    </nav>
    </>
  
);
}
export default About;