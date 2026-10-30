import { useState, useEffect } from 'react';
import './RoomList.css';
import RoomCard from '../components/RoomCard';
import { roomsAPI, districtsAPI, roomTypesAPI } from '../services/api';
import bannerImage from '../assets/images/Banner2.png';
import zaloIcon from '../assets/images/zalo.png';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const zaloLink = import.meta.env.VITE_DEFAULT_ZALO || 'https://zalo.me/0373971926';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [roomsData, districtsData, roomTypesData] = await Promise.all([
        roomsAPI.getAllRooms(),
        districtsAPI.getAllDistricts(),
        roomTypesAPI.getAllRoomTypes()
      ]);

      setRooms(roomsData);
      setDistricts(districtsData);
      setRoomTypes(roomTypesData);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Không thể tải dữ liệu. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    console.log('Search:', { selectedDistrict, selectedRoomType, selectedPriceRange });
    // TODO: Implement filter logic
  };

  const handleZaloClick = () => {
    window.open(zaloLink, '_blank');
  };

  if (error) {
    return (
      <div className="room-list-page">
        <div className="error-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>{error}</p>
          <button onClick={fetchData} className="retry-btn">Thử lại</button>
        </div>
      </div>
    );
  }

  return (
    <div className="room-list-page">
      {/* Hero Section */}
      <section className="room-list-hero">
        <div 
          className="room-list-hero-background" 
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="room-list-hero-overlay"></div>
        </div>
        
        <div className="room-list-hero-container">
          <div className="room-list-hero-content">
            <h1 className="room-list-hero-title">
              Danh sách phòng trọ, căn hộ
            </h1>

            <p className="room-list-hero-description">
              Những phòng tốt nhất tại Bắc Từ Liêm, được chọn lọc kỹ lưỡng
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="filter-bar">
        <div className="filter-bar-container">
          <div className="filter-item">
            <div className="filter-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="filter-content">
              <label>Khu vực</label>
              <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                <option value="">Chọn khu vực</option>
                {districts.map(district => (
                  <option key={district.id} value={district.id}>{district.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-item">
            <div className="filter-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="filter-content">
              <label>Loại phòng</label>
              <select value={selectedRoomType} onChange={(e) => setSelectedRoomType(e.target.value)}>
                <option value="">Tất cả</option>
                {roomTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-item">
            <div className="filter-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="filter-content">
              <label>Mức giá</label>
              <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
                <option value="">Tất cả</option>
                <option value="0-2">Dưới 2 triệu</option>
                <option value="2-3">2-3 triệu</option>
                <option value="3-5">3-5 triệu</option>
                <option value="5-10">5-10 triệu</option>
                <option value="10+">Trên 10 triệu</option>
              </select>
            </div>
          </div>

          <button className="filter-search-btn" onClick={handleSearch}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <span>Tìm kiếm</span>
          </button>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="room-list-rooms">
        <div className="room-list-rooms-container">
          {loading ? (
            <div className="loading">Đang tải...</div>
          ) : (
            <div className="rooms-grid">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Benefits Section */}
      <section className="bottom-benefits">
        <div className="bottom-benefits-container">
          <div className="bottom-benefit-item">
            <div className="bottom-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <div className="bottom-benefit-text">
              <div className="bottom-benefit-title">Thông tin minh bạch</div>
              <div className="bottom-benefit-desc">Hiện giá thật, không lừa đảo</div>
            </div>
          </div>

          <div className="bottom-benefit-item">
            <div className="bottom-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="bottom-benefit-text">
              <div className="bottom-benefit-title">Giá cả hợp lý</div>
              <div className="bottom-benefit-desc">Không phí môi giới, phí ẩn phí ấn</div>
            </div>
          </div>

          <div className="bottom-benefit-item">
            <div className="bottom-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
            <div className="bottom-benefit-text">
              <div className="bottom-benefit-title">Hỗ trợ 24/7</div>
              <div className="bottom-benefit-desc">Luôn sẵn sàng tư vấn và hỗ trợ</div>
            </div>
          </div>

          <div className="bottom-benefit-cta">
            <div className="bottom-benefit-cta-content">
              <div className="bottom-benefit-cta-title">Bạn cần tìm phòng?</div>
              <div className="bottom-benefit-cta-subtitle">Nhắn Zalo để được tư vấn</div>
            </div>
            <button className="bottom-benefit-cta-btn" onClick={handleZaloClick}>
              <img src={zaloIcon} alt="Zalo" width="18" height="18" />
              <span>Liên hệ Zalo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomList;
