import { combineQueriesUrl } from '../utils/functionHelper';
import api, { SERVICE } from './api';

/**
 * Get list users and view users
 * @param {*} req
 * @returns {Promise<import('axios').AxiosResponse<any>>}
 */
export function getUsers(req) {
    const queries = combineQueriesUrl({ ...req });
    return api.GET(`${SERVICE}/api/admin/user-manage${queries}`);
}

export function getUserById(id) {
    return api.GET(`${SERVICE}/api/admin/user-manage/${id}`);
}