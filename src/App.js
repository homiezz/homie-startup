import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import homieLogo from './assets/logo-homie.png'
import { FaPaperPlane } from 'react-icons/fa';
import {backgroundStyle, overlayStyle, textStyles, subtitleStyles, 
  inputContainerStyle, inputStyle, sendIconStyle, navbarStyle, 
  imageStyle, buttonContainerStyle, buttonLinkStyle} from './styles/styles';

function App() {
  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <div style={textStyles}>Homie</div>
          <div style={subtitleStyles}>
            Join us in reshaping renting into a <br /> seamless and enjoyable journey for all!
          </div>
        <div style={inputContainerStyle}>
          <input
            type="text"
            placeholder="Enter e-mail to find out more"
            style={inputStyle}
            className="white-placeholder" />
          <FaPaperPlane style={sendIconStyle} />
        </div>
      </div>
      <div style={navbarStyle}>
        <div>
          <img src={homieLogo} alt="House Icon" style={imageStyle} />
        </div>
        <div style={buttonContainerStyle}>
          <Button variant="link" style={buttonLinkStyle}>About us</Button>
          <Button variant="link" style={buttonLinkStyle}>Explore rentals</Button>
          <Button variant="link" style={buttonLinkStyle}>Log in</Button>
        </div>
      </div>
    </div>
  );
}

export default App;