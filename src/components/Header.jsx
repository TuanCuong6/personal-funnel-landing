import { Link, useLocation, useNavigate } from 'react-router-dom';
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
          <svg className="logo-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#0878F9' }}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
