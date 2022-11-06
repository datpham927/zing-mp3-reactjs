import * as httpRequest from '~/components/utils/httpRequest';

export const search = async (value) => {
    try {
        const res = await httpRequest.get('getDataSearch/', value);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const top100 = async () => {
    try {
        const res = await httpRequest.get('/getListChart100');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
