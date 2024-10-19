import React from 'react';
import {Link} from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to='/'>Acceuil</Link></li>
                <li><Link to="/project">Projets</Link></li>
                <li><Link to="/techno">Techno & outils</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Nav;