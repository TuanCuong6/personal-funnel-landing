function Hero({ zaloLink }) {
  const handleZaloClick = () => {
    if (zaloLink) {
      window.open(zaloLink, '_blank');
    }
  };

  const scrollToRooms = () => {
    const roomsSection = document.querySelector('.rooms-section');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>Uy tín #1 Hà Nội</span>
        </div>
        
        <h1 className="hero-title">
          Tìm Phòng Trọ Giá Tốt<br/>
          <span className="hero-title-highlight">Tại Hà Nội</span>
        </h1>
        
        <p className="hero-subtitle">
          🏠 Phòng mới 100% • 🔒 An ninh 24/7 • 💰 Giá chỉ từ 1.5 triệu/tháng<br/>
          Không phí môi giới • Xem phòng miễn phí • Hỗ trợ chuyển nhà
        </p>

        <div className="hero-actions">
          <button className="hero-cta hero-cta-primary" onClick={handleZaloClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.32-3.84-.88l-.28-.16-2.92.49.49-2.92-.16-.28C4.32 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Liên Hệ Zalo Ngay
          </button>
          
          <button className="hero-cta hero-cta-secondary" onClick={scrollToRooms}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            Xem Danh Sách Phòng
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">500+</div>
            <div className="hero-stat-label">Phòng cho thuê</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">1000+</div>
            <div className="hero-stat-label">Khách hài lòng</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">10+</div>
            <div className="hero-stat-label">Quận/Huyện</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
