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
        <svg className="zalo-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.32-3.84-.88l-.28-.16-2.92.49.49-2.92-.16-.28C4.32 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      </button>
    </div>
  );
}

export default StickyZalo;
