import abcity_logo from '/assets/logos/abcity_logo.svg'
import savanna_logo from '/assets/logos/savanna_logo.svg'


function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg bg-light sticky-top border-bottom border-1 border-dark-subtle">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={savanna_logo} alt="Savanna Logo" height="70"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Переключатель навигации">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center fw-semibold">
            <li className="nav-item">
              <a className="nav-link" href="/abcity">
                <img src={abcity_logo} alt="ABCity Logo" height="70"/>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/children">Детям</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/adult">Взрослым</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/chinese">Китайский</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rki">РКИ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/company">Компаниям</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/masterclass">Мастер-классы</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">Контакты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/abcity">ABCity</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;