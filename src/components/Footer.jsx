function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Phòng Trọ Giá Rẻ. Tất cả quyền được bảo lưu.</p>
        <p style={{marginTop: '8px', fontSize: '13px', color: 'var(--text-muted)'}}>
          Chuyên tư vấn và môi giới phòng trọ chất lượng tại Hà Nội
        </p>
      </div>
    </footer>
  );
}

export default Footer;
