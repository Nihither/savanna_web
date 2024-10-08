import cert_image from '../assets/certificate.jpg'


function CertBanner() {
  return (
    <div className="cert-banner container-fluid bg-light">
      <div className="container py-5">
        <div className="d-flex flex-column">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img src={cert_image} alt="cert_image" className="card-img"/>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="vstack gap-4 justify-content-center align-items-center">
            <h1 className="display-4 text-center pt-5">Дарите знания</h1>
            <div className="">
              <p className="text-center">С недавних пор в Savanna ABC появились сертификаты на обучение.</p>
              <p className="text-center">Теперь вы можете подарить вашим близким по-настоящему бесценный подарок —
                знания.</p>
              <p className="text-center"><small>Сертификат можно приобрести на любую сумму.</small></p>
            </div>
            <button className="btn btn-info">Приобрести сертификат</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertBanner;