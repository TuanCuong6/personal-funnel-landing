import { HomeIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-simple">
          <HomeIcon style={{ width: '20px', height: '20px', color: 'white' }} />
          <span className="footer-text">Thuê Phòng Bắc Từ Liêm  |  Phòng đẹp – Cuộc sống tốt hơn!</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
