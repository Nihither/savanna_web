import {buildCardBody} from "../../utils/reusedFunc.jsx";
import PropTypes from "prop-types";


function Card(props) {

  const title = props.card.title ? props.card.title : "";
  const body = buildCardBody(props.card.body)
  const section = props.section;
  const image = (props.card.image ? "src/assets/images/"+section+"/"+props.card.image : "");

  return (
    <div className="col-lg-4">
      <div className="card text-secondary h-100">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          {body}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
}

export default Card;