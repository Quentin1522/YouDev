import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Items from '../components/Items';
import data from '../data/data.json';
import Footer from '../components/Footer';


const Project: React.FC = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Items data={data} />
            <Footer/>
        </div>
    );
};

export default Project;
