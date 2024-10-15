import hero_bg from '../assets/hero_bg.jpg'


function Hero() {
  return (
    <div className="hero container-fluid p-0 position-relative">
      <div className="container-fluid p-0">
        <img src={hero_bg} alt="" className="bg-image d-lg-none position-absolute top-0 left-0" />
      </div>
      <div className="container-fluid position-relative z-2 bg-black bg-opacity-50">
        <div className="content-block container d-flex align-items-center">
          <h1 className="display-6 text-light text-center text-lg-start">Английский начинается здесь.</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;