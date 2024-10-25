import PropTypes from "prop-types";
import Offer from "./elements/Offer.jsx";


function Offers(props) {

  const offers = props.offers.map((offer, index) =>
    <Offer key={index} offer={offer} />
  )

  return (
    <div className="offers">
      <div className="container-fluid bg-light">
        <div className="container py-5 text-center">
          <div className="py-4"><h1 className="mb-4">Корпоративный английский</h1>
            <p className="fs-5 text-secondary">Обучайте Ваших сотрудников и их детей в Savanna ABC.</p>
            <p className="fs-5 text-secondary">Для корпоративных клиентов мы разработали:</p></div>
          <div className="row">
            {offers}
          </div>
        </div>
      </div>
    </div>
  );
}

Offers.propTypes = {
  offers: PropTypes.array.isRequired,
}

export default Offers;