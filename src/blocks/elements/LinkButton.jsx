import Button from "./Button.jsx";
import PropTypes from "prop-types";


function LinkButton(props) {

  const value = props.value;
  const link = (props.link ? props.link : "#contact-us");

  return (
    <a href={link}>
      <Button value={value} />
    </a>
  );
}

LinkButton.propTypes = {
  link: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default LinkButton;