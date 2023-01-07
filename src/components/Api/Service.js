import axios from 'axios';
import * as httpRequest from '~/components/Api/utils/httpRequest';

// export const search = async (value) => {
//     const res = await axios.get(`${process.env.REACT_APP_BASE_URL}search?keyword=${value}`);
//     return res.data;
// };
export const search = async (value) => {
    try {
        const res = await httpRequest.get('search?keyword=', value);
        return res.data;
    } catch (error) {
        alert('Api đã bị lỗi bạn vui lòng truy cập lại');
    }
};

export const getSearch = async (value) => {
    try {
        const res = await axios.get(`https://api-zingmp3.vercel.app/api/suggestionkeyword?keyword=${value}`);
        return res.data.data;
    } catch (error) {
        alert('Api đã bị lỗi bạn vui lòng truy cập lại');
    }
};
export const artist = async (value) => {
    try {
        const res = await httpRequest.get('artist/', value);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
//

export const newRelease = async () => {
    try {
        const res = await httpRequest.get('chart/new-release');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const playList = async (id) => {
    try {
        const res = await httpRequest.get('playlist/', id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const zingChart = async () => {
    try {
        const res = await axios.get('https://api-zingmp3.vercel.app/api/homechart');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getHome = async () => {
    try {
        const res = await httpRequest.get(`home`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getRadio = async () => {
    try {
        const res = await httpRequest.get(`radio`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getNewSongs = async () => {
    try {
        const res = await axios.get('https://api-zingmp3.vercel.app/api/newreleasechart');
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
export const getCategory = async () => {
    try {
        const res = await axios.get('https://api-zingmp3.vercel.app/api/hubhome');
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

export const getHub = async (id) => {
    try {
        const res = await httpRequest.get('category/', id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTop100 = async () => {
    try {
        const res = await httpRequest.get('top100');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getMv = async (id, index) => {
    try {
        const res = await axios.get(`https://api-zingmp3.vercel.app/api/listmv?id=${id}&page=${index}&count=19`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
export const getFollowing = async (id, index) => {
    try {
        const res = await axios.get(`https://api-zingmp3.vercel.app/api/newfeeds?id=${id}&page=${index}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
export const getPlayMv = async (id) => {
    try {
        const res = await axios.get(`https://api-zingmp3.vercel.app/api/mv/${id}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
export const getCategoryMv = async (id) => {
    try {
        const res = await axios.get(`https://api-zingmp3.vercel.app/api/categorymv/${id}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
export const getLyric = async (id) => {
    try {
        const res = await axios.get(`https://api-zingmp3.vercel.app/api/songlyrics/${id}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};
