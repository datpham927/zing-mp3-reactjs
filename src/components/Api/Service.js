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

export const getHome = async () => {
    try {
        const res = await httpRequest.get(`home`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
