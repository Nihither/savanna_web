import MClass from "./MClass.jsx";
import PropTypes from "prop-types";


function MasterClasses(props) {

  const classes = props.classes.map((item, index) =>
    <MClass key={index} item={item} section={props.section} />
  )

  return (
    <div className="master-classes container-fluid bg-light py-5">
      {classes}
    </div>
  );
}

MasterClasses.propTypes = {
  classes: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
}

export default MasterClasses;