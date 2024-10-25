import Subject from "./elements/Subject.jsx";
import PropTypes from "prop-types";


function Subjects(props) {

  const subjects = props.subjects.map((subject) =>
    <div className = "subject container-fluid py-5 bg-light" key={subject.id}>
      <Subject subject={subject} direction={(subject.id % 2 === 0) ? "rth" : "lft"}/>
    </div>
  );

  return (
    <div className="subjects">{subjects}</div>
  );
}

Subjects.propTypes = {
  subjects: PropTypes.array.isRequired,
}

export default Subjects;