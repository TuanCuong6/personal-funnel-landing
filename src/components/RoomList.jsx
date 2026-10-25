import { useState, useEffect } from 'react';
import { roomsAPI } from '../services/api';
import RoomCard from './RoomCard';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const zaloLink = import.meta.env.VITE_DEFAULT_ZALO || 'https://zalo.me/0373971926';

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const data = await roomsAPI.getAllRooms();
      setRooms(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching rooms:', err);
      setError('Không thể tải danh sách phòng. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewAll = () => {
    const roomsSection = document.querySelector('.rooms-section');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactZalo = () => {
    window.open(zaloLink, '_blank');
  };

  if (loading) {
    return (
      <section className="rooms-section">
        <div className="rooms-container">
          <div className="loading">
            <svg className="loading-spinner" width="48" height="48" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25"/>
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <p>Đang tải danh sách phòng...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rooms-section">
        <div className="rooms-container">
          <div className="error">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>Không thể tải danh sách phòng</p>
            <button onClick={fetchRooms} className="retry-btn">Thử lại</button>
          </div>
        </div>
      </section>
    );
  }

  if (rooms.length === 0) {
    return (
      <section className="rooms-section">
        <div className="rooms-container">
          <div className="empty">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <h3>Chưa có phòng nào</h3>
            <p>Hiện tại chưa có phòng cho thuê. Vui lòng quay lại sau!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rooms-section">
      <div className="rooms-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-left">
            <h2 className="section-title">Phòng nổi bật</h2>
            <p className="section-subtitle">Một số phòng chất lượng, giá tốt đang được quan tâm nhiều nhất</p>
          </div>
          <button className="view-all-btn" onClick={handleViewAll}>
            <span>Xem tất cả phòng</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {rooms.slice(0, 6).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bottom-cta-section">
        <div className="bottom-cta-container">
          <div className="bottom-cta-content">
            <div className="bottom-cta-avatar">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="bottom-cta-text">
              <h3 className="bottom-cta-title">Bạn cần tìm phòng phù hợp?</h3>
              <p className="bottom-cta-subtitle">Mình luôn sẵn sàng tư vấn cho bạn tìm căn phòng ưng ý nhất!</p>
            </div>
          </div>

          <div className="bottom-cta-actions">
            <div className="bottom-cta-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Liên hệ nhanh</span>
            </div>

            <div className="bottom-cta-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Hỗ trợ 24/7</span>
            </div>

            <div className="bottom-cta-feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Uy tín – Tận tâm</span>
            </div>

            <button className="bottom-cta-btn" onClick={handleContactZalo}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Nhắn Zalo ngay</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomList;
