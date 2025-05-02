import React, { useEffect, useState } from 'react';
import './index.scss'; // Use relative path with './'

import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
const About  = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','B','O','U','T',' ','M','E']}
                    idx={15} />
                        </h1>
                        <p>I’m a passionate and detail-oriented front-end developer with a strong foundation in web technologies like HTML, CSS, JavaScript, and React.js. Currently pursuing my B.Tech, I enjoy building clean, responsive, and user-friendly web applications that create meaningful digital experiences.



 </p>
                        <p>I love solving real-world problems through code and continuously strive to learn and grow. Whether it's collaborating on a team project or experimenting with new libraries and tools, I bring enthusiasm, adaptability, and a user-first mindset to everything I do.</p>
                        <p>When I’m not coding, I enjoy exploring design tools, reading about the latest tech trends, and contributing to personal projects that challenge me creatively and technically.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#dd0031" />

                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06539" />

                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D98" />

                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />

                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faSquare} color="#EFD81D" />

                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D29" />

                    </div>


                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default About; 