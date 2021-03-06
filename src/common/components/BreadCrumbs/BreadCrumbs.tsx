import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useStyles } from "./breadcrumbs.styles";

interface IProps {
  breadcrumbs: string;
}

const AppBreadcrumbs: React.FunctionComponent<IProps> = ({ breadcrumbs }) => {
  const classes = useStyles();
  const breadcrumbsToArray = breadcrumbs.split("/").filter((c) => c);
  const [last] = breadcrumbsToArray.reverse();
  const crumbs = breadcrumbsToArray.filter((c) => c !== last).reverse();
  const formatStringWithoutDash = (value: string): string => {
    return value.replace("-", " ");
  };
  return (
    <div className={classes.breadCrumbWrapper}>
      <div className={classes.iconWrapper}>
        <Typography color="textPrimary" variant="h5">
          {formatStringWithoutDash(last)}
        </Typography>
      </div>
      <Breadcrumbs aria-label="breadcrumb">
        {crumbs.map((c) => (
          <Typography color="textSecondary" key={c} className={classes.root}>
            {formatStringWithoutDash(c)}
          </Typography>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default AppBreadcrumbs;
