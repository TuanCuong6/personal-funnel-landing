import { useState, useEffect } from 'react';
import './RoomList.css';
import RoomCard from '../components/RoomCard';
import { roomsAPI, districtsAPI, roomTypesAPI } from '../services/api';
import bannerImage from '../assets/images/Banner2.png';
import zaloIcon from '../assets/images/zalo.png';
import { ShieldCheckIcon, HandThumbUpIcon, BoltIcon } from '@heroicons/react/24/solid';

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
              <ShieldCheckIcon className="benefit-hero-icon" />
            </div>
            <div className="bottom-benefit-text">
              <div className="bottom-benefit-title">Thông tin minh bạch</div>
              <div className="bottom-benefit-desc">Hiện giá thật, không lừa đảo</div>
            </div>
          </div>

          <div className="bottom-benefit-item">
            <div className="bottom-benefit-icon">
              <HandThumbUpIcon className="benefit-hero-icon" />
            </div>
            <div className="bottom-benefit-text">
              <div className="bottom-benefit-title">Giá cả hợp lý</div>
              <div className="bottom-benefit-desc">Không phí môi giới, phí ẩn phí ấn</div>
            </div>
          </div>

          <div className="bottom-benefit-item">
            <div className="bottom-benefit-icon">
              <BoltIcon className="benefit-hero-icon" />
            </div>
            <div className="bottom-benefit-text">
              <div className="bottom-benefit-title">Xem phòng nhanh</div>
              <div className="bottom-benefit-desc">Liên hệ sắp xếp lịch phù hợp</div>
            </div>
          </div>

          <div className="bottom-benefit-cta">
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
