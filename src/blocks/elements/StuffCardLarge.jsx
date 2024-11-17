import PropTypes from "prop-types";


function StuffCardLarge(props) {

  const avatar = props.stuff_card.avatar2 || props.stuff_card.avatar;

  return (
    <div className="card text-center border-0 d-flex align-items-center justify-content-center h-100
                    py-lg-5 py-4 bg-light">
      <img src={"/assets/stuff_avatars/"+avatar} alt="" className=" rounded-circle" width="280"/>
      <div className="card-body">
        <h5 className="card-title">{props.stuff_card.name}</h5>
        <p className="card-text text-secondary"><em>{props.stuff_card.desc}</em></p>
      </div>
    </div>
  );
}

StuffCardLarge.propTypes = {
  stuff_card: PropTypes.object.isRequired,
}

export default StuffCardLarge;