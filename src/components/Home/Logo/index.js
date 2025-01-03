import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import gsap from 'gsap'; // Standard GSAP
import { useEffect, useRef } from 'react';

const Logo = () => {
    const bgref = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            outlineLogoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2 }
        );
    }, []);

    return (
        <div className="logo-container" ref={bgref}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="m2930 4560c-344-16-623-85-915-228..."
                    />
                </g>
            </svg>
        </div>
    );
};

export default Logo;
