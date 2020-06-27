import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import FolderIcon from "@material-ui/icons/Folder";
import { ITreeRoute } from "../interfaces";
import SideNavTree from "./SideNavTree";


const CollapsedSideNavigation = () => {
  const treeRoutes: ITreeRoute[] = [
    {
      nodeId: "1",
      name: "Dashboard",
      iconType: FolderIcon,
      children: [
        {
          nodeId: "2",
          name: "Dashboard 1",
          linkTo: "/dashboard",
        },
      ],
    },
    {
      nodeId: "3",
      name: "Orders",
      iconType: FolderIcon,
      children: [
        {
          nodeId: "4",
          name: "Manage Orders",
          children: [
            {
              nodeId: "5",
              name: "Orders Pipeline",
              linkTo: "/orders",
            },
          ],
        },
        {
          nodeId: "6",
          name: "Picking",
        },
      ],
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onMouseOver={handleClick}
      >
        M
      </Button>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <SideNavTree treeRoutes={treeRoutes}/>
      </Menu>
    </div>
  );
};

export default CollapsedSideNavigation;