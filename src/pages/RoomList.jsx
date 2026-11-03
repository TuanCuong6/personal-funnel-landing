import { useState, useEffect } from 'react';
import Select from 'react-select';
import './RoomList.css';
import RoomCard from '../components/RoomCard';
import { roomsAPI, districtsAPI, roomTypesAPI } from '../services/api';
import bannerImage from '../assets/images/Banner2.png';

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

  // Format data for react-select
  const districtOptions = [
    { value: '', label: 'Khu vực' },
    ...districts.map(d => ({ value: d.id, label: d.name }))
  ];

  const roomTypeOptions = [
    { value: '', label: 'Loại phòng' },
    ...roomTypes.map(t => ({ value: t.id, label: t.name }))
  ];

  const priceRangeOptions = [
    { value: '', label: 'Mức giá' },
    { value: '0-2', label: 'Dưới 2 triệu' },
    { value: '2-3', label: '2-3 triệu' },
    { value: '3-5', label: '3-5 triệu' },
    { value: '5-10', label: '5-10 triệu' },
    { value: '10+', label: 'Trên 10 triệu' }
  ];

  // Custom styles for react-select
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      minHeight: 'auto',
      cursor: 'pointer',
      '&:hover': {
        border: 'none'
      }
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0
    }),
    singleValue: (base) => ({
      ...base,
      color: '#0878F9',
      fontWeight: 500,
      fontSize: '14px'
    }),
    placeholder: (base) => ({
      ...base,
      color: '#0878F9',
      fontWeight: 500,
      fontSize: '14px',
      margin: 0
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#0878F9',
      padding: 0,
      paddingLeft: '8px',
      '&:hover': {
        color: '#0878F9'
      }
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '12px',
      marginTop: '8px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E5E7EB',
      overflow: 'hidden'
    }),
    menuList: (base) => ({
      ...base,
      padding: 0
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#EBF5FF' : state.isFocused ? '#F5F5F5' : 'white',
      color: state.isSelected ? '#0878F9' : '#102F5E',
      fontWeight: state.isSelected ? 500 : 400,
      cursor: 'pointer',
      padding: '12px 16px',
      fontSize: '14px',
      '&:active': {
        backgroundColor: '#EBF5FF'
      }
    })
  };

  const handleSearch = () => {
    console.log('Search:', { selectedDistrict, selectedRoomType, selectedPriceRange });
    // TODO: Implement filter logic
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
          <div className="filter-item-wrapper">
            <div className="filter-icon-outside">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="filter-item">
              <Select
                value={districtOptions.find(opt => opt.value === selectedDistrict)}
                onChange={(option) => setSelectedDistrict(option?.value || '')}
                options={districtOptions}
                placeholder="Khu vực"
                styles={selectStyles}
                isSearchable={false}
              />
            </div>
          </div>

          <div className="filter-item-wrapper">
            <div className="filter-icon-outside">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="filter-item">
              <Select
                value={roomTypeOptions.find(opt => opt.value === selectedRoomType)}
                onChange={(option) => setSelectedRoomType(option?.value || '')}
                options={roomTypeOptions}
                placeholder="Loại phòng"
                styles={selectStyles}
                isSearchable={false}
              />
            </div>
          </div>

          <div className="filter-item-wrapper">
            <div className="filter-icon-outside">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="filter-item">
              <Select
                value={priceRangeOptions.find(opt => opt.value === selectedPriceRange)}
                onChange={(option) => setSelectedPriceRange(option?.value || '')}
                options={priceRangeOptions}
                placeholder="Mức giá"
                styles={selectStyles}
                isSearchable={false}
              />
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
    </div>
  );
}

export default RoomList;
