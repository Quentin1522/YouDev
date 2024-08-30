import React from 'react';
import "../assets/main.scss";
import Header from '../components/Header';
import Nav from '../components/Nav';
import Filter from '../components/Filter';
import Items from '../components/Items';
import data from '../data/data.json';
import Footer from '../components/Footer';


const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Filter/>
            <Items data={data} />
            <Footer/>
        </div>
    );
};

export default Home;
