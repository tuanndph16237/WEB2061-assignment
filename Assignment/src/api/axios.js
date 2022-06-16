import axios from 'axios';

// Khởi tạo cấu hình axios cho toàn bộ project
const api = axios.create({
    baseURL: 'https://6291d2a0cd0c91932b6886a8.mockapi.io/'
});

export default api;