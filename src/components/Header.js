import logo from '../images/logo/logo-min.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип Место" className="header__logo" />
    </header>
  );
}
export default Header;
