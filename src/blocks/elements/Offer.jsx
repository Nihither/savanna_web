import cert from "../../assets/images/certificate.jpg";
import PropTypes from "prop-types";


function Offer(props) {

  const title = props.offer.title;
  const body = props.offer.body.map((item) => {
    if (Array.isArray(item)) {
      return (
        // eslint-disable-next-line react/jsx-key
        <ul className="text-start">
          {/* eslint-disable-next-line react/jsx-key */}
          {item.map((i) => <li>{i}</li>)}
        </ul>
      )
    } else if (typeof item === "string") {
      // eslint-disable-next-line react/jsx-key
      return (<p>{item}</p>)
    }
  });

  return (
    <div className="offer col-lg-6">
      <div className="card h-100">
        <img src={cert} alt=""/>
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