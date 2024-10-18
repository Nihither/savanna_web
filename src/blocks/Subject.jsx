import cert from '../assets/images/certificate.jpg';


function Subject() {
  return (
    <div className="subject container-fluid py-5 bg-light">
      {/*lg display block*/}
      <div className="container d-none d-lg-block">
        <div className="row d-flex">
          <div className="col-lg-1 my-5 bg-body shadow rounded-start-3"></div>
          <div className="col-lg-5 col-md-6 p-0">
            <img src={cert} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-lg-6 col-md-6 my-5 py-5 px-5 text-start bg-body shadow rounded-end-3">
            <h1 className="mb-4">Детям и подросткам</h1>
            <p>Мы преподаем для детей от 5 лет:</p>
            <ul className="text-start">
              <li>Английский</li>
              <li>Китайский</li>
              <li>Математику</li>
              <li>Чтение / Скорочтение</li>
              <li>Постановка произношения</li>
              <li>Лингвострановедение</li>
            </ul>
            <p>Проводим мастер-классы</p>
            <button className="btn btn-primary mt-2">Узнать подробнее</button>
          </div>
        </div>
      </div>
      {/*md display block*/}
      <div className="container d-none d-md-block d-lg-none">
        <div className="row py-3 bg-body rounded-3 shadow d-flex">
          <div className="col-md-6 my-auto">
            <img src={cert} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-md-6 ps-3 text-start">
            <h1 className="mb-4">Детям и подросткам</h1>
            <p>Мы преподаем для детей от 5 лет:</p>
            <ul className="text-start">
              <li>Английский</li>
              <li>Китайский</li>
              <li>Математику</li>
              <li>Чтение / Скорочтение</li>
              <li>Постановка произношения</li>
              <li>Лингвострановедение</li>
            </ul>
            <ul className="text-start">
              <li>Английский</li>
              <li>Китайский</li>
              <li>Математику</li>
              <li>Чтение / Скорочтение</li>
              <li>Постановка произношения</li>
              <li>Лингвострановедение</li>
            </ul>
            <p>Проводим мастер-классы</p>
            <button className="btn btn-primary mt-2">Узнать подробнее</button>
          </div>
        </div>
      </div>
      {/*sm display block*/}
      <div className="container text-center d-md-none">
        <div className="row rounded-3 bg-body shadow py-4">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img src={cert} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-lg-6 pt-3">
            <h1 className="mb-4">Детям и подросткам</h1>
            <p>Мы преподаем для детей от 5 лет:</p>
            <ul className="text-start">
              <li>Английский</li>
              <li>Китайский</li>
              <li>Математику</li>
              <li>Чтение / Скорочтение</li>
              <li>Постановка произношения</li>
              <li>Лингвострановедение</li>
            </ul>
            <p>Проводим мастер-классы</p>
            <button className="btn btn-primary mt-2">Узнать подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;