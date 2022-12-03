import * as httpRequest from '~/components/Api/utils/httpRequest';

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
        const res = await httpRequest.get('artist?name=', value);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
//

export const top100 = async () => {
    try {
        const res = await httpRequest.get('charthome');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const playList = async (id) => {
    try {
        const res = await httpRequest.get('detailplaylist?id=', id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
