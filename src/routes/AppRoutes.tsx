import Orders from "../features/orders/containers/Orders";
import { IconType } from "../common/enums/IconType.enum";
import ComingSoon from "../common/components/ComingSoon/ComingSoon";
import Configure from "../features/configure/containers/Configure";

const Routes = [
  {
    path: "products",
    name: "Products",
    component: ComingSoon,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "dashboard",
    name: "Dashboard",
    component: ComingSoon,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "inventory",
    name: "Inventory",
    component: ComingSoon,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "orders",
    name: "Orders",
    component: Orders,
    iconType: IconType.ORDERS,
  },
  {
    path: "Returns",
    name: "returns",
    component: ComingSoon,
    iconType: IconType.RETURNS,
  },
  {
    path: "support",
    name: "Support",
    component: ComingSoon,
    iconType: IconType.SUPPORT,
  },
  {
    path: "insights",
    name: "Insights",
    component: ComingSoon,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "finance",
    name: "Finance",
    component: ComingSoon,
    iconType: IconType.PRODUCTS,
  },
  {
    path: "config",
    name: "Config",
    component: Configure,
    iconType: IconType.CONFIG,
  },
];

export default Routes;
