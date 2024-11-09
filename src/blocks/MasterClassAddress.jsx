import {BsGeo} from "react-icons/bs";


function MasterClassAddress() {
  return (
    <div className="master-class-address container-fluid bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-6 px-lg-5 py-lg-5">
            <h4 className="mb-lg-5 mb-4">Наши мастер-классы проходят в пространстве SavAnna Kids Club по адресу:</h4>
            <a href="https://maps.app.goo.gl/7iK9ugkXzNvrU9Ss6" target="_blank"
               className="icon-link mb-3 link-underline link-underline-opacity-0">
              <BsGeo/>Приморский пр. 137 к1
            </a>
            <p className="">Станция метро «Беговая»</p>
          </div>
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7900.7801084902185!2d30.209964556894594!3d59.98459204559956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469637f65e49cbd1%3A0x717e8dfceb56ca27!2sSavanna%20Kids%20Club!5e0!3m2!1sen!2sru!4v1731153081868!5m2!1sen!2sru"
              width="100%" height="100%" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterClassAddress;