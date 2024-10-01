import cert_image from '../assets/certificate.jpg'


function CertBanner() {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <img src={cert_image} alt="cert_image" className="card-img"/>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center">Дарите знания</h2>
          <p className="text-center">С недавних пор в Savanna ABC появились сертификаты на обучение.</p>
          <p className="text-center">Теперь вы можете подарить вашим близким по-настоящему бесценный подарок — знания.</p>
          <p className="text-center">Сертификат можно приобрести на любую сумму.</p>
          <button className="btn btn-info">Приобрести сертификат</button>
        </div>
      </div>
    </div>
  );
}

export default CertBanner;