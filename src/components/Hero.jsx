import { MapPinIcon, HomeIcon, ClockIcon, ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
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
            <MapPinIcon style={{ width: '16px', height: '16px' }} />
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
                <HomeIcon style={{ width: '22px', height: '22px' }} />
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Phòng thật</div>
                <div className="benefit-label-subtitle">100%</div>
              </div>
            </div>

            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <ClockIcon style={{ width: '22px', height: '22px' }} />
              </div>
              <div className="benefit-label">
                <div className="benefit-label-title">Hỗ trợ tận tâm</div>
                <div className="benefit-label-subtitle">24/7</div>
              </div>
            </div>

            <div className="hero-benefit-item">
              <div className="benefit-icon-circle">
                <ArrowPathIcon style={{ width: '22px', height: '22px' }} />
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
            <ArrowRightIcon style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
