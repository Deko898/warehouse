import Integrations from "../containers/Integrations";
import ManageIntegration from '../containers/ManageIntegration';

export const configureRoutes = [
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
        {
          name: "Integration lookup",
          path: "/integration-lookup",
        },
      ],
    },
    {
        id: "2",
        name: "Picking",
        path: "/picking",
        children: [
          {
            name: "Pick Orders",
            path: "/pick-orders",
          },
          {
            name: "DePick Pick List",
            path: "/de-pick-pick-list",
          },
          {
            name: "Confirm Pick List",
            path: "/confirm-pick-list",
          },
          {
            name: "Print Tote Contents",
            path: "/print-tote-contents",
          },
          {
            name: "Problem Resolution",
            path: "/problem-resolution",
          },
        ],
      },
  ];