


function FirstLessonBanner() {
  return (
    <div className="container-fluid bg-light">
      <div className="container d-flex py-4">
        <div className="row gap-4">
          <div className="col-lg-9 d-flex align-items-center">
            <h1 className="display-5 text-center text-lg-start">Два первых урока по любой дисциплине бесплатно</h1>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <button className="btn btn-primary">Записаться на первый урок</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstLessonBanner;