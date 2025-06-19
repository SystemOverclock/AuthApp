import axios from 'axios';

const API_URL = 'https://authbackend-r2lp.onrender.com/api';

export const sendEmailCode = async (email: string, code: string) => {
  const response = await axios.post(`${API_URL}/send-code`, { 'email': email, 'code': code }, { headers: { 'Content-Type': 'application/json' }});
  return response.data;
};


export const validateCodeApi = async (email: string, code: string) => {
  const response = await axios.post(`${API_URL}/validate-code`, { 'email': email, 'code': code }, { headers: { 'Content-Type': 'application/json' }});
  return response.data;
};