import Subject from "./elements/Subject.jsx";
import PropTypes from "prop-types";


function Subjects(props) {

  const subjects = props.subjects.map((subject) =>
    <div className = "subject container-fluid py-3 py-lg-5 bg-light" key={subject.id}>
      <Subject subject={subject} direction={(subject.id % 2 === 0) ? "rth" : "lft"} section={props.section}/>
    </div>
  );

  return (
    <div className="subjects">{subjects}</div>
  );
}

Subjects.propTypes = {
  subjects: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
}

export default Subjects;