import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

interface techno{
    id: string;
    title: string;
    cover: string;
}

const Techno: React.FC <{technoTools : techno[] }> = ({technoTools}) => {
    return (
        <div className='wrapperTechno'>
            <Header/>
            <Nav/>
            <div className='techno'>
                {technoTools.map (techno => (
                    <div key={techno.id}>
                        <img src={techno.cover} alt={techno.title}/>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Techno;