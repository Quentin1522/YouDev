import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='wrapperHeader'>
            <div className='darkMod'>
                <button className='light'>Mode jour</button>
                <button className='dark'>Mode nuit</button>
            </div>
            <div className='langage'>
                <button className='FR'>🇫🇷 Français</button>
                <button className='ENG'>🇺🇸 English</button>
            </div>
        </div>
    )
};

export default Header;