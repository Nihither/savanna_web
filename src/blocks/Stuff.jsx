import StuffCard from "./elements/StuffCard.jsx";


function Stuff() {
  return (
    <div className="stuff container-fluid py-4 bg-light">
      <h1 className="text-center display-5 py-4">Наши преподаватели</h1>
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
          <div className="col"><StuffCard/></div>
          <div className="col"><StuffCard/></div>
          <div className="col"><StuffCard/></div>
          <div className="col"><StuffCard/></div>
          <div className="col"><StuffCard/></div>
          <div className="col"><StuffCard/></div>
          <div className="col"><StuffCard/></div>
        </div>
      </div>
    </div>
  );
}

export default Stuff;