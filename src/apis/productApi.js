import { combineQueriesUrl } from '../utils/functionHelper';
import api, { SERVICE } from './api';

/**
 * Get list products and view products
 * @param {*} req
 * @returns {Promise<import('axios').AxiosResponse<any>>}
 */
export function getListProduct(req) {
    const queries = combineQueriesUrl({ ...req });
    return api.GET(`${SERVICE}/api/admin/product-manage?size=500${queries}`);
}

export function getProduct(id) {
    return api.GET(`${SERVICE}/api/admin/product-manage/${id}`);
}

export function updateProduct1(params) {
    const { id, data } = params
    return api.PUT(`${SERVICE}/api/admin/product-manage/${id}`, {
        ...data
    });
}

export function updateProduct(id, params) {
    return api.PUT(`${SERVICE}/api/admin/product-manage/${id}`, params, {
        "Content-Type": "multipart/form-data",
    },);
}