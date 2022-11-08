import {
    FaUsers,
    FaUserCog,
    FaRegListAlt,
    FaReceipt,
    FaBoxes,
    FaBox,
    FaUserFriends,
    FaUser,
    FaWarehouse,
    FaChartBar,
    FaChartPie
} from 'react-icons/fa'

import {
    SETTING_ROUTE,
    ORDER_ROUTE,
    CATEGORY_ROUTE,
    REPORT_ROUTE,
} from './routes'

function createRoute(path, name, routeAuth, icon, enabled = true) {
    if (enabled) {
        return {
            path,
            name,
            routeAuth,
            icon
        }
    }
    return null;
}

const routes = [
    {
        name: 'SETTING',
        items: [
            createRoute(
                SETTING_ROUTE.user.index,
                'User',
                '/user',
                FaUsers
            ),
            createRoute(
                SETTING_ROUTE.role.index,
                'Role',
                '/role',
                FaUserCog
            ),
            createRoute(
                SETTING_ROUTE.logs.index,
                'Logs',
                '/logSystem',
                FaRegListAlt
            )
        ]
    },
    {
        name: 'ORDER',
        items: [
            createRoute(
                ORDER_ROUTE.order.index,
                'Order Management',
                '/order',
                FaReceipt
            )
        ]
    },
    {
        name: 'CATEGORY',
        items: [
            createRoute(
                CATEGORY_ROUTE.productGroup.index,
                'Product Group',
                '/productGroup',
                FaBoxes
            ),
            createRoute(
                CATEGORY_ROUTE.product.index,
                'Product',
                '/product',
                FaBox
            ),
            createRoute(
                CATEGORY_ROUTE.customerGroup.index,
                'Customer Group',
                '/customerGroup',
                FaUserFriends
            ),
            createRoute(
                CATEGORY_ROUTE.customer.index,
                'Customer',
                '/customer',
                FaUser
            ),
            createRoute(
                CATEGORY_ROUTE.warehouse.index,
                'Warehouse',
                '/warehouse',
                FaWarehouse
            )
        ]
    },
    {
        name: 'REPORT',
        items: [
            createRoute(
                REPORT_ROUTE.businessReport.index,
                'Business Report',
                '/businessReport',
                FaChartBar
            ),
            createRoute(
                REPORT_ROUTE.systemReport.index,
                'System Report',
                '/systemReport',
                FaChartPie
            )
        ]
    },
];

function flatten(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ret = ret.concat(flatten(arr[i].items));
        } else {
            ret.push(arr[i].items);
        }
    }
    return ret;
}
export const routesFlatten = flatten(routes);

export default routes;