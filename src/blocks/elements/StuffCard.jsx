import contact_us from '../../assets/contact_us.jpg'


function StuffCard() {
  return (
    <div className="card text-center border-0 d-flex align-items-center justify-content-center h-100
                    py-lg-5 py-4 bg-light">
      <img src={contact_us} alt="" className=" rounded-circle" width="90"/>
      <div className="card-body">
        <h5 className="card-title">Савченко Анна</h5>
        <p className="card-text text-secondary"><em>Автор проекта</em></p>
      </div>
    </div>
  );
}

export default StuffCard;