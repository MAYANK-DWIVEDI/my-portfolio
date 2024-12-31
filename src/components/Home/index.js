import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for routing
import LogoTitle from '../../assets/images/logo-s.png'; // Correctly imported logo
import'./index.scss';
const Home  = () => {


    return (
        <div className=" container home-page">
            <div className=" text-zone">
                <h1> Hi,  <br/>  I'm
                <img src ={LogoTitle} alt="developer" /> 
                Mayank
                <br/>
                web developer
                </h1>
                <h2> Frontend developer /javascript </h2>
                <Link to="/contact" className='flat-button'>  Cotact Me</Link>
            </div>
        </div>
    )
}
 export default Home