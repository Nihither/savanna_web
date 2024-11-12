import PropTypes from "prop-types";
import {buildCardBody} from "../../utils/reusedFunc.jsx";
import LinkButton from "./LinkButton.jsx";


function Subject(props) {

  const dir_class = (props.direction === "rth") ? "flex-lg-row" : "flex-lg-row-reverse";
  const section = props.section;
  const title = props.subject.title;
  const image = (props.subject.image ? "src/assets/images/"+section+"/"+props.subject.image : "");
  const body = buildCardBody(props.subject.body);
  const linkButton =
    <LinkButton value={props.buttonValue} link={props.link} displayButton={props.displayButton}/>

  return (
    <>
      {/*lg display block*/}
      <div className="container d-none d-lg-block">
        <div className={"row d-flex " + dir_class}>
          <div className="col-lg-1 my-5 bg-body shadow rounded-start-3"></div>
          <div className="col-lg-5 col-md-6 p-0 position-relative">
            <img src={image} alt="" className="img-sa rounded-3 position-absolute" />
          </div>
          <div className="col-lg-6 col-md-6 my-5 py-5 px-5 text-start bg-body shadow rounded-end-3">
            <h1 className="mb-4">{title}</h1>
            {body}
            {linkButton}
          </div>
        </div>
      </div>
      {/*md display block*/}
      <div className="container d-none d-md-block d-lg-none">
        <div className="row py-3 bg-body rounded-3 shadow d-flex">
          <div className="col-md-6 my-auto">
            <img src={image} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-md-6 ps-3 text-start">
            <h1 className="mb-4">{title}</h1>
            {body}
            {linkButton}
          </div>
        </div>
      </div>
      {/*sm display block*/}
      <div className="container text-center d-md-none">
        <div className="row rounded-3 bg-body shadow py-4">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-lg-6 pt-3">
            <h1 className="mb-4">{title}</h1>
            {body}
            {linkButton}
          </div>
        </div>
      </div>
    </>
  );
}

Subject.propTypes = {
  subject: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  buttonValue: PropTypes.string,
  displayButton: PropTypes.bool,
  link: PropTypes.string,
}

export default Subject;