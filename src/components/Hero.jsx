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
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Left Side - Content */}
        <div className="hero-content">
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Khu vực: Bắc Từ Liêm – Hà Nội</span>
          </div>

          <h1 className="hero-title">
            Tìm phòng đẹp<br/>
            <span className="hero-title-highlight">Bắc Từ Liêm dễ dàng</span>
          </h1>

          <p className="hero-description">
            Tổng hợp phòng trọ, căn hỏ mini, homestay chất lượng<br/>
            Giá tốt – Không phí môi giới – Hỗ trợ xem phòng nhanh!
          </p>

          {/* Benefits */}
          <div className="hero-benefits">
            <div className="hero-benefit">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="benefit-text">
                <div className="benefit-title">Phòng thật 100%</div>
              </div>
            </div>

            <div className="hero-benefit">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="benefit-text">
                <div className="benefit-title">Hỗ trợ tận tâm 24/7</div>
              </div>
            </div>

            <div className="hero-benefit">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <div className="benefit-title">Chỉ kết nối qua Zalo cá nhân</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="hero-cta" onClick={handleZaloClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
            </svg>
            <span>Nhắn Zalo ngay</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Handwriting note */}
          <div className="hero-note">
            <span className="handwriting">Phòng đẹp<br/>Cuộc sống vui hơn!</span>
            <svg className="smile-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
        </div>

        {/* Right Side - Why Section */}
        <div className="hero-sidebar">
          <div className="why-card">
            <h3 className="why-title">Vì sao nên thuê phòng<br/>qua mình?</h3>
            
            <div className="why-items">
              <div className="why-item">
                <div className="why-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0878F9" strokeWidth="2">
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                  </svg>
                </div>
                <div className="why-text">
                  <div className="why-text-title">Không phí môi giới</div>
                  <div className="why-text-desc">Giá giúp tối ưu, không quá trung gian.</div>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0878F9" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <div className="why-text">
                  <div className="why-text-title">Xem phòng nhanh</div>
                  <div className="why-text-desc">Sắp xếp lịch xem linh hoạt, dẫn thẳng đến phòng.</div>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0878F9" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="why-text">
                  <div className="why-text-title">Tư vấn tận tâm</div>
                  <div className="why-text-desc">Hỗ trợ 24/7, giải đáp mọi thắc mắc.</div>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0878F9" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="why-text">
                  <div className="why-text-title">Thông tin rõ ràng</div>
                  <div className="why-text-desc">Chỉ đăng khu vực, không quá tầng gần, chi tiết địa chỉ khi liên hệ.</div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="why-footer">
              <div className="why-footer-content">
                <div className="why-footer-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="why-footer-title">Đừng ngần ngại!</div>
                  <div className="why-footer-subtitle">Nhắn Zalo cho mình nhé!</div>
                </div>
                <div className="why-footer-arrow">
                  <svg width="64" height="48" viewBox="0 0 64 48" fill="none" className="handdrawn-arrow">
                    <path d="M8 24C12 18 20 12 32 12C44 12 52 18 56 24" stroke="#0878F9" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M48 16L56 24L48 32" stroke="#0878F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <button className="why-cta" onClick={handleZaloClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                <span>Nhắn Zalo ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
