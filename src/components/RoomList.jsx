import { useState, useEffect } from 'react';
import { roomsAPI } from '../services/api';
import RoomCard from './RoomCard';
import zaloIcon from '../assets/images/zalo.png';

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

        {/* Rooms Grid with Why Sidebar */}
        <div className="rooms-with-sidebar">
          {/* Rooms Grid */}
          <div className="rooms-grid">
            {rooms.slice(0, 6).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Why Section Sidebar */}
          <div className="why-sidebar">
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
                    <img src={zaloIcon} alt="Zalo" width="24" height="24" />
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

                <button className="why-cta" onClick={handleContactZalo}>
                  <img src={zaloIcon} alt="Zalo" width="20" height="20" />
                  <span>Nhắn Zalo ngay</span>
                </button>
              </div>
            </div>
          </div>
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
              <img src={zaloIcon} alt="Zalo" width="20" height="20" />
              <span>Nhắn Zalo ngay</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomList;
