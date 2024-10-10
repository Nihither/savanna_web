import {BsGeo} from "react-icons/bs";
import {FaInstagram, FaVk, FaRegEnvelope, FaPhoneAlt} from "react-icons/fa";


function ContactsHeader() {
  return (
    <div className="contact-header container-fluid bg-dark d-none d-lg-block">
      <div className="container d-flex justify-content-between">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-light">
              <BsGeo/>
              <span className="ms-1">Санкт-Петербург</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="tel:+7 (931) 227 6136" className="nav-link text-light">
              <FaPhoneAlt/>
              <span className="ms-1">+7 (931) 227 6136</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="mailto:savvannaabc@gamail.com" className="nav-link text-light">
              <FaRegEnvelope/>
              <span className="ms-1">savvannaabc@gmail.com</span>
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a href="https://vk.com/savanna_abc" target="_blank" className="nav-link text-light">
              <FaVk/>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.instagram.com/savanna_abc" target="_blank" className="nav-link text-light">
              <FaInstagram/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactsHeader;