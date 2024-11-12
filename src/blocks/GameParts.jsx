import PropTypes from "prop-types";
import Subject from "./elements/Subject.jsx";


function GameParts(props) {

  const parts = props.parts.map((part) =>
    <div className="subject container-fluid py-5 bg-light" key={part.id}>
      <Subject subject={part}
               direction={(part.id % 2 === 0) ? "rth" : "lft"}
               section={props.section}
               displayButton={false}/>
    </div>
  );

  return (
    <div className="parts">
      {parts}
    </div>
  );
}

GameParts.propTypes = {
  parts: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
}

export default GameParts;