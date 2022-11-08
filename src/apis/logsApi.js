import api, { SERVICE } from './api';

/**
 * Get list roles and view roles
 * @param {*} req
 * @returns {Promise<import('axios').AxiosResponse<any>>}
 */
export function getLogs() {
    return api.GET(`${SERVICE}/api/admin/log`);
}