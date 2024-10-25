import PropTypes from "prop-types";
import SubjectMini from "./elements/SubjectMini.jsx";


function SubjectsMini(props) {

  const subjects = props.subjects.map((subject) =>
    <div className="container-fluid py-5 bg-light" key={subject.id} >
      <SubjectMini subject={subject} direction={(subject.id % 2 === 0) ? "rth" : "lft"}/>
    </div>
  )

  return (
    <div className="subjects">
      {subjects}
    </div>
  );
}

SubjectsMini.propTypes = {
  subjects: PropTypes.array.isRequired,
}

export default SubjectsMini;