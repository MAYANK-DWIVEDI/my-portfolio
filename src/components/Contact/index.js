import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  // Check if email has been sent in this session
  const isEmailSent = sessionStorage.getItem('emailSent') === 'true';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timer);
  }, []);

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the email has already been sent in this session
    if (isEmailSent) {
      alert('You have already sent an email in this session.');
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_fd7vidv',        // Your Service ID
        'template_czkydie',       // Your Template ID
        form.current,             // Reference to the form
        'vSdlpg1ea4534NO5F'       // Your Public Key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Message successfully sent!');
          
          // Mark the email as sent in sessionStorage
          sessionStorage.setItem('emailSent', 'true');
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

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
            <form ref={form} onSubmit={sendEmail}>
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
                  <input type="submit" className="flat-button" value="SEND" disabled={isEmailSent} />
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
          Dehradun<br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[30.0668, 79.0193]} zoom={10}>
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
