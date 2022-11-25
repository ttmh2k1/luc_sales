import { combineQueriesUrl } from '../utils/functionHelper';
import api, { SERVICE } from './api';

/**
 * Get list product group and view product group
 * @param {*} req
 * @returns {Promise<import('axios').AxiosResponse<any>>}
 */
export function getListProductGroup(req) {
    const queries = combineQueriesUrl({ ...req });
    return api.GET(`${SERVICE}/api/admin/product-category?size=200${queries}`);
}

export function getProductGroup(id) {
    return api.GET(`${SERVICE}/api/admin/product-category/${id}`);
}

export function updateProductGroup(id, params) {
    return api.PUT(`${SERVICE}/api/admin/product-category/${id}`, { status: params })
}