import { useState, useEffect } from 'react';
import { roomsAPI } from '../services/api';
import RoomCard from './RoomCard';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return (
      <section className="rooms-section">
        <div className="loading">
          <svg className="loading-spinner" width="48" height="48" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          <p>Đang tải danh sách phòng...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rooms-section">
        <div className="error">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>Không thể tải danh sách phòng</p>
          <button onClick={fetchRooms} className="retry-btn">Thử lại</button>
        </div>
      </section>
    );
  }

  if (rooms.length === 0) {
    return (
      <section className="rooms-section">
        <div className="empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <h3>Chưa có phòng nào</h3>
          <p>Hiện tại chưa có phòng cho thuê. Vui lòng quay lại sau!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="rooms-section">
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
    </section>
  );
}

export default RoomList;
