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

  if (loading) {
    return (
      <div className="loading">
        <p>Đang tải danh sách phòng...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={fetchRooms} className="hero-cta" style={{marginTop: '16px'}}>
          Thử lại
        </button>
      </div>
    );
  }

  if (rooms.length === 0) {
    return (
      <div className="empty">
        <p>Hiện chưa có phòng nào. Vui lòng quay lại sau!</p>
      </div>
    );
  }

  return (
    <section className="rooms-section">
      <div className="container">
        <h2 className="section-title">Phòng Trọ Nổi Bật</h2>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard 
              key={room.id} 
              room={room}
              onContactClick={(room) => {
                console.log('Contact clicked for room:', room.title);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomList;
