import cert from "../../assets/images/certificate.jpg";
import {buildCardBody} from "../../utils/reusedFunc.jsx";
import PropTypes from "prop-types";


function Card(props) {

  const body = buildCardBody(props.card.body)

  return (
    <div className="col-lg-4">
      <div className="card text-secondary h-100">
        <img src={cert} className="card-img-top" alt="..."/>
        <div className="card-body">
          {body}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card;