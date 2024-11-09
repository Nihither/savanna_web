import cert from '../../assets/images/certificate.jpg';
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import {buildCardBody} from "../../utils/reusedFunc.jsx";


function Subject(props) {

  const dir_class = (props.direction === "rth") ? "flex-lg-row" : "flex-lg-row-reverse";

  const title = props.subject.title;
  const body = buildCardBody(props.subject.body);

  return (
    <>
      {/*lg display block*/}
      <div className="container d-none d-lg-block">
        <div className={"row d-flex " + dir_class}>
          <div className="col-lg-1 my-5 bg-body shadow rounded-start-3"></div>
          <div className="col-lg-5 col-md-6 p-0 position-relative">
            <img src={cert} alt="" className="img-sa rounded-3 position-absolute" />
          </div>
          <div className="col-lg-6 col-md-6 my-5 py-5 px-5 text-start bg-body shadow rounded-end-3">
            <h1 className="mb-4">{title}</h1>
            {body}
            <Button value="Узнать подробнее" />
          </div>
        </div>
      </div>
      {/*md display block*/}
      <div className="container d-none d-md-block d-lg-none">
        <div className="row py-3 bg-body rounded-3 shadow d-flex">
          <div className="col-md-6 my-auto">
            <img src={cert} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-md-6 ps-3 text-start">
            <h1 className="mb-4">{title}</h1>
            {body}
            <Button value="Узнать подробнее"/>
          </div>
        </div>
      </div>
      {/*sm display block*/}
      <div className="container text-center d-md-none">
        <div className="row rounded-3 bg-body shadow py-4">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img src={cert} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-lg-6 pt-3">
            <h1 className="mb-4">{title}</h1>
            {body}
            <Button value="Узнать подробнее"/>
          </div>
        </div>
      </div>
    </>
  );
}

Subject.propTypes = {
  subject: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
}

export default Subject;