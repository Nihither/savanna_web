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
              src="https://yandex.ru/map-widget/v1/?display-text=savanna%20kids%20club&ll=30.216386%2C59.984369&mode=search&oid=203560656791&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY9WtaSjUD5AEQgB%2BRIq%2BE1AEhIJcQD9vn%2Fz4z8R29yYnrDEzT8iBgABAgMEBSgKOABAAkgBagJydZ0BzczMPaABAKgBAL0BNQIdncIBBpe%2FpKn2BYICEXNhdmFubmEga2lkcyBjbHViigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=30.216386%2C59.984369&sspn=0.031000%2C0.011547&text=savanna%20kids%20club&z=13.33"
              width="100%" height="100%" allowFullScreen="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterClassAddress;