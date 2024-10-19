import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="wrapperHome">
              <div className='nav'>
                <Header/>
                <Nav/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;