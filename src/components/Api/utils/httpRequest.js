import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path = '', value = '') => {
    const response = await httpRequest.get(path + value);
    return response.data;
};

export default httpRequest;
