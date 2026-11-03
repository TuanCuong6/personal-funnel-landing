import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import zaloIcon from '../assets/images/zalo.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleNavClick}>
            <HomeIcon className="logo-icon" style={{ width: '40px', height: '40px', color: '#0878F9' }} />
            <div className="logo-text">
              <div className="logo-main">Thuê Phòng Bắc Từ Liêm</div>
              <div className="logo-sub">Phòng đẹp – Cuộc sống tốt hơn!</div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleNavClick}>Trang chủ</Link>
            <Link to="/rooms" className={`nav-link ${location.pathname === '/rooms' ? 'active' : ''}`} onClick={handleNavClick}>Danh sách phòng</Link>
            <button onClick={handleAboutClick} className="nav-link">Về tôi</button>
          </nav>

          {/* CTA Button */}
          <button className="header-cta" onClick={handleZaloClick}>
            <img src={zaloIcon} alt="Zalo" width="20" height="20" />
            <span>Liên hệ Zalo</span>
          </button>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XMarkIcon style={{ width: '24px', height: '24px' }} />
            ) : (
              <Bars3Icon style={{ width: '24px', height: '24px' }} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </>
  );
}

export default Header;
