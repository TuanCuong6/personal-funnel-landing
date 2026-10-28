import preFooterBg from '../assets/images/Pre-Footer.png';
import zaloIcon from '../assets/images/zalo.png';

function PreFooter() {
  const zaloLink = import.meta.env.VITE_DEFAULT_ZALO || 'https://zalo.me/0373971926';

  const handleZaloClick = () => {
    window.open(zaloLink, '_blank');
  };

  return (
    <section className="pre-footer" style={{backgroundImage: `url(${preFooterBg})`}}>
      <div className="pre-footer-overlay"></div>
      <div className="pre-footer-container">
        <div className="pre-footer-content">
          {/* Avatar Icon */}
          <div className="pre-footer-avatar">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>

          {/* Text Content */}
          <div className="pre-footer-text">
            <h3 className="pre-footer-title">Bạn cần tìm phòng phù hợp?</h3>
            <p className="pre-footer-subtitle">Mình luôn sẵn sàng tư vấn giúp bạn tìm được phòng ưng ý nhất!</p>
          </div>
        </div>

        {/* Features & CTA */}
        <div className="pre-footer-actions">
          {/* Zalo CTA Button */}
          <button className="pre-footer-cta-btn" onClick={handleZaloClick}>
            <img src={zaloIcon} alt="Zalo" width="20" height="20" />
            <span>Nhắn Zalo ngay</span>
          </button>

          {/* Feature 2 */}
          <div className="pre-footer-feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Hỗ trợ 24/7</span>
          </div>

          {/* Feature 3 */}
          <div className="pre-footer-feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Uy tín – Tận tâm</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooter;
