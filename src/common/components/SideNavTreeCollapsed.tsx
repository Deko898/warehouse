import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import FolderIcon from "@material-ui/icons/Folder";
import { ITreeRoute } from "./interfaces";
import SideNavTree from "./SideNavTree";

const StyledMenu = withStyles({
  paper: {
    // border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
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
    {...props}
  />
));

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

  const ref = React.createRef();
  return (
    <div>
      {/* {treeRoutes.map((t) => {
        return (
          <div>
            <div
              aria-controls={t.name}
              aria-haspopup="true"
              key={t.nodeId}
              onClick={handleClick}
            >
              {t.name}
            </div>
            {t.children ? (
              <StyledMenu
                id={t.name}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={handleClose}
              >
                <SideNavTree treeRoutes={t.children} />
              </StyledMenu>
            ) : null}
          </div>
        );
      })} */}
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onMouseOver={handleClick}
        // onMouseOut={handleClose}
      >
        M
      </Button>
      {/* <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
      > */}
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
        {/* <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem> */}
      </Menu>
    </div>
  );
};

export default CollapsedSideNavigation;