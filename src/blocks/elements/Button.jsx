import PropTypes from "prop-types";


function Button(props) {

  return (
    <button className="btn btn-sa-primary border-sa-secondary border-2 mt-2">
      {props.value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Button;