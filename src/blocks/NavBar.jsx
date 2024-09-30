import abcity_logo from '../assets/abcity_logo.svg'
import savanna_logo from '../assets/savanna_logo.svg'


function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg bg-light sticky-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={savanna_logo} alt="Savanna Logo" height="70"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Переключатель навигации">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Детям</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Взрослым</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Китайский</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">РКИ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Компаниям</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Мастер-классы</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Контакты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABCity</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;