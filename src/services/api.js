import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000, // 60 seconds timeout for slow Railway->Supabase
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

export const districtsAPI = {
  // Lấy tất cả quận/huyện
  getAllDistricts: async () => {
    const response = await api.get('/districts');
    return response.data;
  },
};

export const roomTypesAPI = {
  // Lấy tất cả loại phòng
  getAllRoomTypes: async () => {
    const response = await api.get('/roomtypes');
    return response.data;
  },
};

export default api;
