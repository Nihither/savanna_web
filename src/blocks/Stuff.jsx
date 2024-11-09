import StuffCard from "./elements/StuffCard.jsx";
import PropTypes from "prop-types";
import stuff_data from "../configs/stuff_data.json"
import StuffCardLarge from "./elements/StuffCardLarge.jsx";


function Stuff(props) {

  let stuff;
  if (props.stuff_ids.length === 1) {
    const stuff_id = props.stuff_ids[0];
    stuff =
      <div key={stuff_id.toString()} className="col">
        <StuffCardLarge key={stuff_id.toString()}
                   stuff_card={stuff_data.stuff[stuff_id]}
        />
      </div>
  } else {
    stuff = props.stuff_ids.map((stuff_id) =>
      <div key={stuff_id.toString()} className="col">
        <StuffCard key={stuff_id.toString()}
                   stuff_card={stuff_data.stuff[stuff_id]}
        />
      </div>
    )
  }



  return (
    <div className="stuff container-fluid py-4 bg-light">
      <h1 className="text-center display-5 py-4">Наши преподаватели</h1>
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 d-flex justify-content-center">
          {stuff}
        </div>
      </div>
    </div>
  );
}

Stuff.propTypes = {
  stuff_ids: PropTypes.array.isRequired,
}

export default Stuff;