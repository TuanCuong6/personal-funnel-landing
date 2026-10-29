import './RoomCard.css';
import zaloIcon from '../assets/images/zalo.png';

function RoomCard({ room, onContactClick }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price).replace('₫', 'triệu/tháng');
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    const zaloLink = import.meta.env.VITE_DEFAULT_ZALO || 'https://zalo.me/0373971926';
    window.open(zaloLink, '_blank');
    
    if (onContactClick) {
      onContactClick(room);
    }
  };

  // Lấy ảnh đầu tiên hoặc ảnh placeholder
  const roomImage = room.images && room.images.length > 0 
    ? room.images[0] 
    : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80';

  return (
    <div className="property-card">
      {/* Image Container */}
      <div className="property-image-container">
        <img 
          src={roomImage}
          alt={room.title}
          className="property-image"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80';
          }}
        />
        
        {/* Type Badge */}
        {room.roomTypeName && (
          <div className="property-badge">{room.roomTypeName}</div>
        )}
        
        {/* Favorite Button */}
        <button className="property-favorite">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="property-content">
        {/* Title */}
        <h3 className="property-title">{room.title}</h3>

        {/* Location */}
        <div className="property-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{room.district || 'Bắc Từ Liêm'} – (chỉ kín đường/khu vực)</span>
        </div>

        {/* Price */}
        <div className="property-price">
          {(room.price / 1000000).toFixed(1)} triệu/tháng
        </div>

        {/* Meta Info */}
        <div className="property-meta">
          <div className="property-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18"/>
            </svg>
            <span>{room.area}m²</span>
          </div>
          <div className="property-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            <span>Giường vs, điều hòa</span>
          </div>
          <div className="property-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/>
              <path d="M12 5v14"/>
            </svg>
            <span>WC</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="property-cta" onClick={handleContactClick}>
          <img src={zaloIcon} alt="Zalo" width="18" height="18" />
          <span>Liên hệ Zalo</span>
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
