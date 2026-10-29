import bannerImage from '../assets/images/HomeBanner.png';
import zaloIcon from '../assets/images/zalo.png';

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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Phòng thật</div>
                <div className="benefit-label-subtitle">100%</div>
              </div>
            </div>

            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Hỗ trợ tận tâm</div>
                <div className="benefit-label-subtitle">24/7</div>
              </div>
            </div>

            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Phòng mới</div>
                <div className="benefit-label-subtitle">Cập nhật 24/7</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="hero-cta-button" onClick={handleZaloClick}>
            <img src={zaloIcon} alt="Zalo" width="20" height="20" />
            <span>Nhắn Zalo ngay</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
