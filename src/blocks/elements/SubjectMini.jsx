import * as propTypes from "prop-types";
import {buildCardBody} from "../../utils/reusedFunc.jsx";


function SubjectMini(props) {

  const dir_class = (props.direction === "rth") ? "flex-lg-row" : "flex-lg-row-reverse";
  const section = props.section;
  const title = (props.subject.title ? props.subject.title : "");
  const image = (props.subject.image ? "src/assets/images/"+section+"/"+props.subject.image : "");
  const body = buildCardBody(props.subject.body);

  return (
    <div className="subjectMini container">
      <h1 className="mb-5 text-center">{title}</h1>
      <div className={"row g-5 d-flex " + dir_class}>
        <div className="col-lg-6">
          <img src={image} alt="" className="img-sa"/>
        </div>
        <div className="col-lg-6">
          {body}
        </div>
      </div>
    </div>
  );
}

SubjectMini.propTypes = {
  subject: propTypes.object.isRequired,
  direction: propTypes.string.isRequired,
  section: propTypes.string.isRequired,
}

export default SubjectMini;