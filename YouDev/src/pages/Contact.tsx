import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
    return (
        <div className="wrapperContact">
            <div>
                <Header/>
                <Nav/>
            </div>

            <div className='content'>
                <form>
                    <input type='text'id='name' placeholder='Nom*'></input>
                    <input type='text'id='FirstName' placeholder='Prénom*'></input>
                    <input type='email' id='name'placeholder='Email*'></input>
                    <textarea id='message' placeholder='Écrivez votre message !'></textarea>
                    <input className='submit' type='submit'></input>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;