import logo from '../../assets/images/logo.svg'
import '../header/style.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMETA" />
        <h1>DSmeta</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/lucianoscabora">Luciano Scabora</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
