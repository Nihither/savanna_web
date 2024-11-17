import PropTypes from "prop-types";


function StuffCard(props) {

  return (
    <div className="card text-center border-0 d-flex align-items-center justify-content-center h-100
                    py-lg-5 py-4 bg-light">
      <img src={"/assets/stuff_avatars/"+props.stuff_card.avatar} alt="" className=" rounded-circle" width="90"/>
      <div className="card-body">
        <h5 className="card-title">{props.stuff_card.name}</h5>
        <p className="card-text text-secondary"><em>{props.stuff_card.role}</em></p>
      </div>
    </div>
  );
}

StuffCard.propTypes = {
  stuff_card: PropTypes.object.isRequired,
}

export default StuffCard;