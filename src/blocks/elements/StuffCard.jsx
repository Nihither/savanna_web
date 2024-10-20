import PropTypes from "prop-types";


function StuffCard(props) {

  return (
    <div className="card text-center border-0 d-flex align-items-center justify-content-center h-100
                    py-lg-5 py-4 bg-light">
      <img src={"src/assets/stuff_avatars/"+props.avatar} alt="" className=" rounded-circle" width="90"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text text-secondary"><em>{props.role}</em></p>
      </div>
    </div>
  );
}

StuffCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  avatar: PropTypes.string,
}

export default StuffCard;