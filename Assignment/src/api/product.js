import api from './axios';

const book = '/Books';

export const getBooks = () => api.get(`${book}`);

export const getBook = (id) => api.get(`${book}/${id}`);

export const deleteBook = (id) => api.delete(`${book}/${id}`);

export const createBook = (data) => api.post(book, data);

export const updateBook = (id, data) => api.put(`${book}/${id}`, data);