import React from 'react';
import "../assets/main.scss";
import PP from "../assets/profile-pic.png"

const Header: React.FC = () => {
    return (
        <div className='wrapperHeader'>
            <input className='searchBar' type="search" placeholder='Rechercher'></input>
            <div className='darkMode'>
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