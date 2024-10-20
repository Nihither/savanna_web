import cert from '../../assets/images/certificate.jpg';
import PropTypes from "prop-types";


function Subject(props) {

  const dir_class = (props.direction === "rth") ? "flex-lg-row" : "flex-lg-row-reverse";

  const title = props.subject.title;
  const body = props.subject.body.map((item) => {
    if (Array.isArray(item)) {
      return (
        // eslint-disable-next-line react/jsx-key
        <ul className="text-start">
          {/* eslint-disable-next-line react/jsx-key */}
          {item.map((i) => <li>{i}</li>)}
        </ul>
      )
    } else if (typeof item === "string") {
      // eslint-disable-next-line react/jsx-key
      return (<p>{item}</p>)
    }
  });

  return (
    <div className="subject container-fluid py-5 bg-light">
      {/*lg display block*/}
      <div className="container d-none d-lg-block">
        <div className={"row d-flex " + dir_class}>
          <div className="col-lg-1 my-5 bg-body shadow rounded-start-3"></div>
          <div className="col-lg-5 col-md-6 p-0">
            <img src={cert} alt="" className="img-fluid rounded-3"/>
          </div>
          <div className="col-lg-6 col-md-6 my-5 py-5 px-5 text-start bg-body shadow rounded-end-3">
            <h1 className="mb-4">{title}</h1>
            {body}
            <button className="btn btn-primary mt-2">Узнать подробнее</button>
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
            <button className="btn btn-primary mt-2">Узнать подробнее</button>
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
            <button className="btn btn-primary mt-2">Узнать подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Subject.propTypes = {
  subject: PropTypes.object,
  direction: PropTypes.string,
}

export default Subject;