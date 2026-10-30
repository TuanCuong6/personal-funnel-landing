import { UserCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
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
            <UserCircleIcon style={{ width: '48px', height: '48px' }} />
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
            <ClockIcon style={{ width: '20px', height: '20px' }} />
            <span>Hỗ trợ 24/7</span>
          </div>

          {/* Feature 3 */}
          <div className="pre-footer-feature">
            <ShieldCheckIcon style={{ width: '20px', height: '20px' }} />
            <span>Uy tín – Tận tâm</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooter;
