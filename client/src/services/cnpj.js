import api from './api';

export default async function getCompanyByCnpj(cnpj) {
    try {
        const resp = await api.get(`quote/${cnpj}`);
        return resp.data;
    } catch (error) {
        console.log(error.response);
        return false;
    }
}