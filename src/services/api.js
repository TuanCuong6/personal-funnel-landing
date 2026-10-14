import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const roomsAPI = {
  // Lấy tất cả phòng
  getAllRooms: async () => {
    const response = await api.get('/rooms');
    return response.data;
  },

  // Lấy chi tiết phòng
  getRoomById: async (id) => {
    const response = await api.get(`/rooms/${id}`);
    return response.data;
  },
};

export default api;
