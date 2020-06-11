import OnHold from "../containers/OnHold/OnHold";
import Pending from "../containers/Pending/Pending";
import Inbox from "../containers/Inbox/Inbox";
import Picking from "../containers/Picking/Picking";
import Rework from "../containers/Rework/Rework";
import Packing from "../containers/Packing/Packing";
import Routing from "../containers/Routing/Routing";
import Shipping from "../containers/Shipping/Shipping";
import ReadyToShip from "../containers/ReadyToShip/ReadyToShip";

const routes = [
  //   { name: "Index", link: "/", activeIndex: 0 },
  {
    name: "On Hold",
    link: "/onHold",
    activeIndex: 1,
    component: OnHold,
  },
  { name: "Pending", link: "/pending", activeIndex: 2, component: Pending },
  { name: "Inbox", link: "/inbox", activeIndex: 3, component: Inbox },
  { name: "Picking", link: "/picking", activeIndex: 4, component: Picking },
  { name: "Rework", link: "/rework", activeIndex: 5, component: Rework },
  { name: "Packing", link: "/packing", activeIndex: 6, component: Packing },
  { name: "Routing", link: "/routing", activeIndex: 7, component: Routing },
  { name: "Shipping", link: "/shipping", activeIndex: 8, component: Shipping },
  {
    name: "Ready to Ship",
    link: "/readyToShip",
    activeIndex: 9,
    component: ReadyToShip,
  },
];

export default routes;
