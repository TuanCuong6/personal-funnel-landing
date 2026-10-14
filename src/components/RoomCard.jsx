function RoomCard({ room, onContactClick }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    if (room.zaloLink) {
      window.open(room.zaloLink, '_blank');
    }
    if (onContactClick) {
      onContactClick(room);
    }
  };

  // Lấy ảnh đầu tiên hoặc ảnh placeholder
  const roomImage = room.images && room.images.length > 0 
    ? room.images[0] 
    : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80';

  return (
    <div className="room-card">
      <img 
        src={roomImage}
        alt={room.title}
        className="room-image"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80';
        }}
      />
      <div className="room-content">
        <div className="room-header">
          <h3 className="room-title">{room.title}</h3>
          <div className="room-price">{formatPrice(room.price)}</div>
        </div>
        
        <div className="room-meta">
          <div className="room-meta-item">
            <span>📐</span>
            <span>{room.area}m²</span>
          </div>
          <div className="room-meta-item">
            <span>📍</span>
            <span>{room.district}</span>
          </div>
        </div>

        <p className="room-description">{room.description}</p>

        <div className="room-footer">
          <div className="room-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {room.address || room.district}
          </div>
          <button className="room-cta" onClick={handleContactClick}>
            Liên hệ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
