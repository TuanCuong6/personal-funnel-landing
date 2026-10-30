import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, Bars3Icon } from '@heroicons/react/24/solid';
import zaloIcon from '../assets/images/zalo.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const zaloLink = import.meta.env.VITE_DEFAULT_ZALO || 'https://zalo.me/0373971926';

  const handleZaloClick = () => {
    window.open(zaloLink, '_blank');
  };

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      scrollToSection('footer');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('footer'), 100);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <HomeIcon className="logo-icon" style={{ width: '40px', height: '40px', color: '#0878F9' }} />
          <div className="logo-text">
            <div className="logo-main">Thuê Phòng Bắc Từ Liêm</div>
            <div className="logo-sub">Phòng đẹp – Cuộc sống tốt hơn!</div>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Trang chủ</Link>
          <Link to="/rooms" className={`nav-link ${location.pathname === '/rooms' ? 'active' : ''}`}>Danh sách phòng</Link>
          <button onClick={handleAboutClick} className="nav-link">Về tôi</button>
        </nav>

        {/* CTA Button */}
        <button className="header-cta" onClick={handleZaloClick}>
          <img src={zaloIcon} alt="Zalo" width="20" height="20" />
          <span>Liên hệ Zalo</span>
        </button>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn">
          <Bars3Icon style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </header>
  );
}

export default Header;
