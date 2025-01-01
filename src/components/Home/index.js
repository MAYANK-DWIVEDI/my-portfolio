import React, { useState } from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for routing
import LogoTitle from '../../assets/images/logo-s.png'; // Correctly imported logo
import'./index.scss';
import AnimatedLetters from '../AnimatedLetters';


const Home  = () => {
    const[letterClass] = useState('text-animate')
    const nameArray = ['m','a','y','a','n','k']
    const jobArray =['w','e','b',' ', 'd','e','v','e','l','o','p','e','r']

    return (
        <div className=" container home-page">
            <div className=" text-zone">
                <h1> 
                    <span className='letterClass'>H</span>
                    <span className={`${letterClass} _12`}>H</span>  <br/> 
                    
                    <span className={`${letterClass} _13`}>I</span> 
                    
                    <span className={`${letterClass} _14`}>'m</span>  
                <img src ={LogoTitle} alt="developer" /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2> Frontend developer /javascript </h2>
                <Link to="/contact" className='flat-button'>  Cotact Me</Link>
            </div>
        </div>
    )
}
 export default Home