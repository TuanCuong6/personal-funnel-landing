function Header() {
  const phoneNumber = import.meta.env.VITE_DEFAULT_PHONE || '0373971926';
  const zaloLink = import.meta.env.VITE_DEFAULT_ZALO || 'https://zalo.me/0373971926';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleZaloClick = () => {
    window.open(zaloLink, '_blank');
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">
            <span className="logo-main">Thuê Phòng HN</span>
            <span className="logo-sub">Giá tốt - Uy tín</span>
          </span>
        </a>
        
        <nav className="nav">
          <button className="nav-btn nav-btn-call" onClick={handleCallClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="nav-btn-text">{phoneNumber}</span>
          </button>
          
          <button className="nav-btn nav-btn-zalo" onClick={handleZaloClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.32-3.84-.88l-.28-.16-2.92.49.49-2.92-.16-.28C4.32 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <span className="nav-btn-text">Chat Zalo</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
