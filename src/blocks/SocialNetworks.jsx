import social_network_bg from '../assets/social_network_bg.jpg'
import {FaInstagram, FaVk} from "react-icons/fa6";


function SocialNetworks() {
  return (
    <div className="social-networks container-fluid p-0">
      <div className="container-fluid bg-opacity-50 bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="vstack text-center text-light">
                <h1 className="display-3 mb-4">Мы в соцсетях!</h1>
                <p>В наших соцсетях мы регулярно выкладываем информацию о наших акциях, конкурсах, мастер-классах.</p>
                <p>Подписывайтесь и следите за новостями.</p>
                <div className="hstack gap-5 d-flex justify-content-center">
                  <h2 className="display-6">
                    <a href="https://vk.com/savanna_abc" target="_blank" className="text-light">
                      <FaVk/>
                    </a>
                  </h2>
                  <h2 className="display-6">
                    <a href="https://www.instagram.com/savanna_abc" target="_blank" className="text-light">
                      <FaInstagram/>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialNetworks;