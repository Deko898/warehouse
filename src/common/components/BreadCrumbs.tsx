import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "12px",
    },
  })
);

interface IProps {
  breadcrumbs: string;
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const AppBreadcrumbs: React.FunctionComponent<IProps> = ({ breadcrumbs }) => {
  const classes = useStyles();
  const breadcrumbsToArray = breadcrumbs.split("/").filter((c) => c);
  const [last] = breadcrumbsToArray.reverse();
  const crumbs = breadcrumbsToArray.filter((c) => c !== last).reverse();
  console.log(crumbs);
  return (
    <div>
      <Typography color="textPrimary" variant="h5">
        {last}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        {crumbs.map((c) => (
          <Typography color="textSecondary" key={c} className={classes.root}>
            {c}
          </Typography>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default AppBreadcrumbs;
