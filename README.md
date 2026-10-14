# Personal Funnel - Landing Page

Landing page cho hệ thống Personal Funnel - Hiển thị danh sách phòng trọ với thiết kế đẹp, chống cướp khách.

## 🎨 Features

- ✨ Giao diện đẹp theo Water Element theme
- 📱 Responsive design
- 🔗 Zalo CTA buttons (Sticky + mỗi phòng)
- 🖼️ Image gallery với multiple images
- 📍 Hiển thị khu vực (không địa chỉ chi tiết)

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Create .env file
# VITE_API_URL=http://localhost:5025/api
# VITE_DEFAULT_ZALO=https://zalo.me/YOUR_PHONE

# Run dev server
npm run dev
```

App sẽ chạy tại: http://localhost:5173

## 🔧 Configuration

Tạo file `.env`:

```env
VITE_API_URL=http://localhost:5025/api
VITE_DEFAULT_ZALO=https://zalo.me/0373971926
```

Cho production (Vercel):
- `VITE_API_URL`: URL của Backend API trên Render
- `VITE_DEFAULT_ZALO`: Link Zalo của bạn

## 📦 Deploy to Vercel

1. Connect GitHub repo
2. Framework Preset: Vite
3. Root Directory: `/` (hoặc để trống)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add Environment Variables (xem phần Configuration)

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── RoomList.jsx
│   ├── RoomCard.jsx
│   ├── StickyZalo.jsx
│   └── Footer.jsx
├── services/
│   └── api.js
├── App.jsx
└── App.css
```

## 📝 License

MIT
