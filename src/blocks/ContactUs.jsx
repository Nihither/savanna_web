import {FaPhoneAlt, FaWhatsapp, FaTelegramPlane} from "react-icons/fa";
import ContactForm from './elements/ContactForm.jsx'
import PropTypes from "prop-types";


function ContactUs(props) {

  const title = props.contactUs ? props.contactUs.title : "Как с нами связаться?";
  const section = props.section ? props.section : "";
  const image = props.contactUs ?
    "src/assets/images/"+section+"/"+props.contactUs.image : "src/assets/images/contact_us.jpg";

  return (
    <div className="contact-us container-fluid bg-light" id="contact-us">
      <div className="container py-5">
        <h1 className="display-5 mb-3 mb-lg-5 text-center">{title}</h1>
        <div className="row gx-5">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <img src={image} alt="contact us" className="card-img rounded"/>
          </div>
          <div className="col-lg-6 vstack gap-3">
            <h5>Закажите обратный звонок</h5>
            <ContactForm/>
            <h5 className="mt-3">По телефону, в мессенджере или почте</h5>
            <div className="vstack gap-3">
              <a href="tel:+79312276136" className="icon-link link-underline link-underline-opacity-0">
                <FaPhoneAlt/>
                Tel: +7-931-227-6136
              </a>
              <a href="https://wa.me/79312276136" className="icon-link link-underline link-underline-opacity-0">
                <FaWhatsapp/>
                Tel: +7-931-227-6136
              </a>
              <a href="https://t.me/+79312276136" className="icon-link link-underline link-underline-opacity-0">
                <FaTelegramPlane/>
                Tel: +7-931-227-6136
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  contactUs: PropTypes.object,
  section: PropTypes.string,
}

export default ContactUs;