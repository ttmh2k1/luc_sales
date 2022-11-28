import api, { SERVICE } from './api';

/**
 * Get statistic and view statistic
 * @param {*} req
 * @returns {Promise<import('axios').AxiosResponse<any>>}
 */
// export function getStatistic() {
//     return api.GET(`${SERVICE}/api/admin/statistic?month=11&year=2022&type=MONTH`);
// }

export function getStatistic(unit, year, type) {
    return api.GET(`${SERVICE}/api/admin/statistic?month=${unit}&year=${year}&type=${type}`);
}