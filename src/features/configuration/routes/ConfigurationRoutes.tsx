import Integrations from "../containers/Integrations";
import ManageIntegration from '../containers/ManageIntegration';
import ShoppingCarts from "../containers/ShoppingCarts/ShoppingCarts";
import Shopping from "../containers/Shopping/Shopping";
import Fulfilment from "../containers/Fulfilment/Fulfilment";
import Print from "../containers/Print/Print";
import Crm from "../containers/Crm/Crm";
import Gateways from "../containers/Gateways/Gateways";
import OtherThings from "../containers/OtherThings/OtherThings";

export const configurationRoutes = [
    {
      id: "1",
      name: "Integrations",
      path: "/integrations",
      component: Integrations,
      children: [
        {
          name: "Manage integrations",
          path: "/manage-integration",
          component: ManageIntegration
        },
        {
          name: "Create integrations",
          path: "/create-integration",
        },
      ],
    }
  ];

export const availableIntegrations = [
  { name: "Shopping carts", path: "/carts", activeIndex: 0, component: ShoppingCarts },
  { name: "Shopping", path: "/shopping", activeIndex: 1, component: Shopping },
  { name: "Fulfilment", path: "/fulfilment", activeIndex: 2, component: Fulfilment },
  { name: "Print on demand", path: "/print", activeIndex: 3, component: Print },
  { name: "Crm", path: "/crm", activeIndex: 4, component: Crm },
  { name: "Gateways", path: "/gateways", activeIndex: 5, component: Gateways },
  { name: "Other Things", path: "/other", activeIndex: 6, component: OtherThings }
]