import Button from "./Button.jsx";
import PropTypes from "prop-types";


function LinkButton(props) {

  const value = props.value;
  const link = (props.link ? props.link : "#contact-us");
  const displayButton = (props.displayButton === false ? "d-none" : "")

  return (
    <a href={link} className={displayButton}>
      <Button value={value} />
    </a>
  );
}

LinkButton.propTypes = {
  link: PropTypes.string,
  value: PropTypes.string,
  displayButton: PropTypes.bool,
}

export default LinkButton;