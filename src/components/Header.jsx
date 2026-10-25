function Header() {
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

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo">
          <svg className="logo-icon" width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#0878F9" stroke="#0878F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="logo-text">
            <div className="logo-main">Thuê Phòng Bắc Từ Liêm</div>
            <div className="logo-sub">Phòng đẹp – Cuộc sống tốt hơn!</div>
          </div>
        </a>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <a href="/" className="nav-link active">Trang chủ</a>
          <button onClick={() => scrollToSection('rooms-section')} className="nav-link">Danh sách phòng</button>
          <button onClick={() => scrollToSection('footer')} className="nav-link">Về tôi</button>
          <button onClick={() => scrollToSection('rooms-section')} className="nav-link">Khu vực</button>
        </nav>

        {/* CTA Button */}
        <button className="header-cta" onClick={handleZaloClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
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
