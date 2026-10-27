import zaloIcon from '../assets/images/zalo.png';

function StickyZalo({ zaloLink }) {
  const handleClick = () => {
    if (zaloLink) {
      window.open(zaloLink, '_blank');
    } else {
      // Fallback - có thể set default Zalo link
      alert('Vui lòng liên hệ qua số điện thoại!');
    }
  };

  return (
    <div className="sticky-zalo">
      <button className="zalo-btn" onClick={handleClick} title="Liên hệ Zalo">
        <img src={zaloIcon} alt="Zalo" className="zalo-icon" />
      </button>
    </div>
  );
}

export default StickyZalo;
