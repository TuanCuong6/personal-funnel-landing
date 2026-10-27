import zaloIcon from '../assets/images/zalo.png';

function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Slogan */}
        <div className="footer-logo">
          <svg className="logo-icon" width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="#0878F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="footer-logo-text">Thuê Phòng Bắc Từ Liêm</span>
        </div>

        <p className="footer-slogan">
          Phòng đẹp – Cuộc sống tốt hơn!
        </p>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <button onClick={scrollToTop} className="footer-link">Trang chủ</button>
          <button onClick={() => scrollToSection('rooms-section')} className="footer-link">Danh sách phòng</button>
          <button onClick={handleZaloClick} className="footer-link">Liên hệ</button>
          <button onClick={() => scrollToSection('rooms-section')} className="footer-link">Khu vực</button>
        </nav>

        {/* Zalo CTA */}
        <button className="footer-cta" onClick={handleZaloClick} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          fontSize: '15px',
          fontWeight: '600',
          color: 'white',
          background: 'linear-gradient(135deg, #0180C7, #0092D2)',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          marginBottom: '32px',
          transition: 'all 0.25s ease'
        }}>
          <img src={zaloIcon} alt="Zalo" width="20" height="20" />
          <span>Nhắn Zalo để được tư vấn</span>
        </button>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Thuê Phòng Bắc Từ Liêm. Phòng đẹp – Cuộc sống tốt hơn!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
