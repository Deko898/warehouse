import Orders from "../features/orders/containers/Orders";
import Dashboard from "../features/dashboard/Dashboard";
import { IconType } from "../common/enums/IconType.enum";

const Routes = [
  {
    path: "/products",
    name: "Products",
    component: Dashboard,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Dashboard,
    iconType: IconType.PRODUCTS
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    iconType: IconType.ORDERS,
  },
  {
    path: "/Returns",
    name: "returns",
    component: Dashboard,
    iconType: IconType.RETURNS,
  },
  {
    path: "/support",
    name: "Support",
    component: Dashboard,
    iconType: IconType.SUPPORT
  },
  {
    path: "/insights",
    name: "Insights",
    component: Dashboard,
    iconType: IconType.PRODUCTS
  },
  {
    path: "/finance",
    name: "Finance",
    component: Dashboard,
    iconType: IconType.PRODUCTS
  },
  {
    path: "/config",
    name: "Config",
    component: Dashboard,
    iconType: IconType.CONFIG
  },
];

export default Routes;
