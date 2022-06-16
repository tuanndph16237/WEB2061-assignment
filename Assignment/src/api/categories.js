import api from "./axios";
const categories = '/categories';
export const getCategories = () => api.get(`${categories}`);