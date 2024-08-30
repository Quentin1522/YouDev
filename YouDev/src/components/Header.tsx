import React from 'react';
import PP from "../assets/profile-pic.png"

const Header: React.FC = () => {
    return (
        <div className='wrapperHeader'>
            <div className='darkMod'>
                <button className='light'>Mode jour</button>
                <button className='dark'>Mode nuit</button>
            </div>
            <div className='profile'>
                <img className='PP' src={PP} alt='photo de profile'></img>
            </div>
        </div>
    )
};

export default Header;