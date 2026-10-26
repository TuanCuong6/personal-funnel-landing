import bannerImage from '../assets/images/HomeBanner.png';

function Hero({ zaloLink }) {
  const handleZaloClick = () => {
    if (zaloLink) {
      window.open(zaloLink, '_blank');
    }
  };

  return (
    <section className="hero">
      {/* Hero Background Image */}
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Location Badge */}
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Khu vực Bắc Từ Liêm – Hà Nội</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Tìm phòng đẹp<br/>
            Bắc Từ Liêm dễ dàng
          </h1>

          {/* Description */}
          <p className="hero-description">
            Tổng hợp phòng trọ, căn hộ mini, homestay chất lượng<br/>
            Giá tốt – Không phí môi giới – Hỗ trợ xem phòng nhanh!
          </p>

          {/* Benefits (3 cột ngang) */}
          <div className="hero-benefits-row">
            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Phòng thật</div>
                <div className="benefit-label-subtitle">100%</div>
              </div>
            </div>

            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14" fill="none" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Hỗ trợ tận tâm</div>
                <div className="benefit-label-subtitle">24/7</div>
              </div>
            </div>

            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Chỉ kết nối qua</div>
                <div className="benefit-label-subtitle">Zalo cá nhân</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="hero-cta-button" onClick={handleZaloClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
            </svg>
            <span>Nhắn Zalo ngay</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
