import Subject from "./elements/Subject.jsx";
import PropTypes from "prop-types";


function Subjects(props) {

  const subjects = props.subjects.map((subject) =>
    <Subject key={subject.id} subject={subject}
             direction={(subject.id % 2 === 0) ? "rth" : "lft"} />
  );

  return (
    <div className="subjects">{subjects}</div>
  );
}

Subjects.propTypes = {
  subjects: PropTypes.array.isRequired,
}

export default Subjects;