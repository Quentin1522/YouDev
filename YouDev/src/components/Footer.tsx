import React from 'react';
import {Link} from "react-router-dom";
import  X from '../assets/x.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer: React.FC= () => {
    return (
        <div className='wrapperFooter'>
                <div className='socialMedia'>
                        <Link to='www.linkedin.com/in/quentin-horneck-34131b201'>
                            <img src={Linkedin}></img> 
                        </Link>       
                        <Link to='https://x.com/QuentinDevFr'>
                            <img src={X}></img>
                        </Link>       
                </div>
                <p>© Copyright 2024 - Horneck Quentin. Tous droits réservés. </p>
        </div>
    );
};

export default Footer;