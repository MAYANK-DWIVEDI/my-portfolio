import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

// Uncomment this section if you want to use EmailJS
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timer);
  }, []);

  // Uncomment the following if you want to use EmailJS
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
  //     .then(
  //       () => {
  //         alert('Message successfully sent!');
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again');
  //       }
  //     );
  // };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mayank,
          <br />
          India,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[30.0668, 79.0193]} zoom={1}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[30.0668, 79.0193]}>
    <Popup>Welcome to Uttarakhand, India!</Popup>
  </Marker>
</MapContainer>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
