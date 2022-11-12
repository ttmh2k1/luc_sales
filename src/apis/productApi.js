import { combineQueriesUrl } from '../utils/functionHelper';
import api, { SERVICE } from './api';

/**
 * Get list products and view products
 * @param {*} req
 * @returns {Promise<import('axios').AxiosResponse<any>>}
 */
export function getListProduct(req) {
    const queries = combineQueriesUrl({ ...req });
    return api.GET(`${SERVICE}/api/admin/product-manage${queries}`);
}