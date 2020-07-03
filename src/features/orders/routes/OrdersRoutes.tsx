import OnHold from "../containers/OnHold/OnHold";
import Pending from "../containers/Pending/Pending";
import Inbox from "../containers/Inbox/Inbox";
import Picking from "../containers/Picking/Picking";
import Rework from "../containers/Rework/Rework";
import Packing from "../containers/Packing/Packing";
import Routing from "../containers/Routing/Routing";
import Shipping from "../containers/Shipping/Shipping";
import ReadyToShip from "../containers/ReadyToShip/ReadyToShip";
import ManageOrders from "../containers/ManageOrders";
import OrdersPipeline from "../containers/OrdersPipeline";
import CreateOrder from "../containers/CreateOrder";
import FileUpload from '../containers/FileUpload/FileUpload';
import WebForm from "../containers/WebForm/WebForm";

const ordersRoutes = [
  {
    id: "1",
    name: "Manage Orders",
    path: "/manage-orders",
    component: ManageOrders,
    children: [
      {
        name: "Order Pipeline",
        path: "/order-pipeline",
        component: OrdersPipeline,
      },
      {
        name: "Create order",
        path: "/create-order",
        component: CreateOrder,
      },
      {
        name: "Order lookup",
        path: "/order-lookup",
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
  {
    id: "3",
    name: "Packing",
    path: "/packing",
    children: [
      {
        name: "Pack Orders",
        path: "/pack-orders",
      },
      {
        name: "Prepare Pallet",
        path: "/prepare-pallet",
      },
    ],
  },
  {
    id: "4",
    name: "Routing",
    path: "/routing",
    children: [
      {
        name: "Request Routing",
        path: "/request-routing",
      },
    ],
  },
  {
    id: "5",
    name: "Shipping",
    path: "/shipping",
    children: [
      {
        name: "Export BoxID to Carriers",
        path: "/export-boxid-carriers",
      },
      {
        name: "Import BoxID from Carriers",
        path: "/import-boxid-carriers",
      },
      {
        name: "USPS - Run End of Day",
        path: "/usps-run-end-of-day",
      },
      {
        name: "FedEx - Void Ship Label",
        path: "/fedex-void-ship-label",
      },
      {
        name: "UPS - Void Ship Label",
        path: "/ups-void-ship-label",
      },
    ],
  },
];

const orderPipelineRoutes = [
  {
    name: "On Hold",
    path: "/onHold",
    activeIndex: 0,
    component: OnHold,
  },
  { name: "Pending", path: "/pending", activeIndex: 1, component: Pending },
  { name: "Inbox", path: "/inbox", activeIndex: 2, component: Inbox },
  { name: "Picking", path: "/picking", activeIndex: 3, component: Picking },
  { name: "Rework", path: "/rework", activeIndex: 4, component: Rework },
  { name: "Packing", path: "/packing", activeIndex: 5, component: Packing },
  { name: "Routing", path: "/routing", activeIndex: 6, component: Routing },
  { name: "Shipping", path: "/shipping", activeIndex: 7, component: Shipping },
  {
    name: "Ready to Ship",
    path: "/readyToShip",
    activeIndex: 8,
    component: ReadyToShip,
  },
];

const orderCreateRoutes = [
  { name: "Web Form", path: "/form", activeIndex: 0, component: WebForm },
  { name: "File Upload", path: "/upload", activeIndex: 1, component: FileUpload },
]

export { ordersRoutes, orderPipelineRoutes, orderCreateRoutes };
