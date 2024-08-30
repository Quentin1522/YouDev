import React from 'react';

const filter: React.FC = () => {
    return (
        <div className='wrapperFilter'>
            <ul className='filter'>
                <li>Tous</li>
                <li>Projets études</li>
                <li>Projets perso</li>
            </ul>
        </div>
    );
};

export default filter;