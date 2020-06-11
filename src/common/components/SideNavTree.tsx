import React from "react";
import {
  makeStyles,
  createStyles,
  fade,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import { withRouter, NavLink, RouteComponentProps } from "react-router-dom";
import { ITreeRoute } from "./interfaces";

const useTreeItemStyles = makeStyles((theme) => ({
  content: {
    // flexDirection: "row-reverse",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
  labelCircleRoot: {
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  labelCircle: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "rgba(255,255,255,.6)",
  },
  active: {
    "& .MuiTreeItem-root": {
      "& *": {
        color: "#fff",
      },
    },
  },
}));

const StyledTreeItem = withStyles((theme: Theme) => {
  return createStyles({
    content: {
      flexDirection: "row-reverse",
      padding: "8px 10px",
      height: "40px",
      "&:hover": {
        background: "#24292e",
      },
      "& .MuiTreeItem-content": {
        backgroundColor: "unset !important",
      },
    },
    label: {
      padding: 0,
    },
    expanded: {
      margin: "0",
      background: "#30373e",
      position: "relative",
      "& .MuiSvgIcon-colorAction": {
        "& path": {
          color: theme.palette.secondary.main,
        },
      },
      "& >.MuiTreeItem-content": {
        backgroundColor: "#24292e",
      },
    },
    selected: {
      "& .labelCircle": {
        background: theme.palette.secondary.main,
      },
      "&:focus": {
        "& .MuiTreeItem-label": {
          backgroundColor: "unset",
        },
      },
      "& .MuiTreeItem-label": {
        backgroundColor: "unset !important",
        "&:hover": {
          backgroundColor: "unset !important",
        },
      },
    },
    group: {
      marginLeft: "15px",
      position: "relative",
      "& .MuiTreeItem-content": {
        padding: "0 10px",
        height: "30px",
        "&:hover": {
          background: "unset",
          "& *": {
            color: "#fff",
          },
        },
      },
      "&::after": {
        content: '""',
        position: "absolute",
        left: "6px",
        top: "-10px",
        bottom: "15px",
        width: "2px",
        background: "#24292e",
        display: "block",
      },

      "& .MuiTreeItem-label": {
        "&::before": {
          content: '""',
          position: "absolute",
          left: "-3px",
          top: "50%",
          width: "10px",
          height: "2px",
          marginTop: "-1px",
          background: "#24292e",
        },
      },
    },
  });
})((props: any) => {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon ? (
            <LabelIcon color="action" className={classes.labelIcon} />
          ) : (
            <div className={classes.labelCircleRoot}>
              <div className={classes.labelCircle}></div>
            </div>
          )}
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.content,
      }}
      {...other}
    />
  );
});

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
  treeItem: {
    "& .MuiTreeItem-content": {
      backgroundColor: "unset !important",
    },
  },
});

interface IProps extends RouteComponentProps {
  treeRoutes: ITreeRoute[];
}
// FunctionComponent<RouteComponentProps<any, StaticContext, PoorMansUnknown>>
const SideNavTree: React.FunctionComponent<IProps> = ({ treeRoutes }) => {
  console.log(treeRoutes)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string[]>(["3", "4"]);
  const [selected, setSelected] = React.useState<string[]>(["5"]);

  const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const renderTree = (treeRoutes: ITreeRoute[]) => {
    return treeRoutes.map((t: ITreeRoute) => {
      return (
        // t.children ? renderTree(t.children) :
        t.linkTo ? (
          <NavLink
            to={t.linkTo}
            style={{ textDecoration: "none" }}
            key={t.nodeId}
          >
            <StyledTreeItem
              nodeId={t.nodeId}
              labelText={t.name}
              key={t.nodeId}
              labelIcon={t.iconType}
              className={classes.treeItem}
            />
          </NavLink>
        ) : (
          <StyledTreeItem
            nodeId={t.nodeId}
            labelText={t.name}
            key={t.nodeId}
            labelIcon={t.iconType}
            className={t.iconType ? "" : classes.treeItem}
          >
            {t.children ? renderTree(t.children) : null}
          </StyledTreeItem>
        )
      );
    });
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {renderTree(treeRoutes)}
    </TreeView>
  );
};

export default withRouter(SideNavTree);
