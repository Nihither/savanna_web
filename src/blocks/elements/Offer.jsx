import cert from "../../assets/images/certificate.jpg";
import PropTypes from "prop-types";
import {buildCardBody} from "../../utils/reusedFunc.jsx";


function Offer(props) {

  const title = props.offer.title;
  const body = buildCardBody(props.offer.body);

  return (
    <div className="offer col-lg-6">
      <div className="card h-100">
        <img src={cert} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-secondary"><em>{body}</em></p>
        </div>
      </div>
    </div>
  );
}

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
}

export default Offer;