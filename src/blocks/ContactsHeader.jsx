import {BsEnvelope, BsGeo, BsInstagram, BsTelegram, BsTelephone} from "react-icons/bs";


function ContactsHeader() {
  return (
    <div className="container-fluid bg-dark d-none d-lg-block">
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
              <BsTelephone/>
              <span className="ms-1">+7 (931) 227 6136</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="mailto:savvannaabc@gamail.com" className="nav-link text-light">
              <BsEnvelope/>
              <span className="ms-1">savvannaabc@gmail.com</span>
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-light">
              <BsTelegram/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light">
              <BsInstagram/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactsHeader;